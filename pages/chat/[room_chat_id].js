import ChatLayout from '@/components/templates/ChatLayout';
import { Avatar, Textarea } from '@nextui-org/react';
import { IoSend } from 'react-icons/io5';
import React, { useEffect, useRef, useState } from 'react';
import ChatMessageContainer from '@/components/molecules/ChatMessageContainer';
import ChatRoom from '@/components/organisms/Chat/ChatRoom';
import ChatHead from '@/components/organisms/Chat/ChatHead';
import ChatForm from '@/components/organisms/Chat/ChatForm';
import io from 'socket.io-client';
const socket = io.connect(process.env.NEXT_PUBLIC_BACKEND_URL);

import { useRouter } from 'next/router';
import axiosInstance from '@/utils/axiosInstance';
import socketInstance from '@/utils/socketInstance';
import { useDispatch, useSelector } from 'react-redux';
import { insertData, insertOneData } from '@/store/message/messageSlice';
const ChatMessage = () => {
  const router = useRouter();
  const params = router.query.room_chat_id;
  const room_chat_id = Number(params);
  const chatRoomRef = React.createRef(null);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messsagesData = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const fetchData = async (room_chat_id) => {
    try {
      setIsLoading(true);
      const {
        data: { data },
      } = await axiosInstance.get(`/message/${room_chat_id}`);

      dispatch(insertData(data));
      console.log({ data });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFetchData = (room_chat_id) => {
    if (!messsagesData[room_chat_id]) {
      fetchData(room_chat_id);
    }
  };

  useEffect(() => {
    socket.emit('join_session', room_chat_id);
    handleFetchData(room_chat_id);
  }, [room_chat_id]);

  const handleSendMessage = (message) => {
    let dataPayload = {
      room_chat_id,
      message,
      status: 'sending',
      is_delete: false,
      createdAt: new Date(),
      isSender: true,
    };

    // setMessages([...messages, dataPayload]);
    dispatch(insertOneData({ data: dataPayload, room_chat_id }));
    socket.emit('send_message', socketInstance(dataPayload));
    if (chatRoomRef.current) {
      chatRoomRef.current.scrollTop = chatRoomRef.current.scrollHeight;
    }
  };

  // useEffect(() => {
  //   if (messages.length !== messsagesData[room_chat_id]) {
  //     setMessages(messsagesData[room_chat_id]);

  //   }
  // }, [messages, messsagesData]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      // setMessages([...messages, data]);
      dispatch(insertData({ data: data, room_chat_id }));
      console.log({ data });
    });
  }, [socket, messages]);
  // console.log({ messsagesData });

  return (
    <ChatLayout className={'flex flex-col justify-between h-screen'}>
      <ChatHead />
      <ChatRoom ref={chatRoomRef} messages={messsagesData[room_chat_id]?.data} isLoading={isLoading} />
      <ChatForm onSendMessage={handleSendMessage} />
    </ChatLayout>
  );
};

export default ChatMessage;

import ChatLayout from '@/components/templates/ChatLayout';
import { Avatar, Textarea } from '@nextui-org/react';
import { IoSend } from 'react-icons/io5';
import React, { useRef } from 'react';
import ChatMessageContainer from '@/components/molecules/ChatMessageContainer';
import ChatRoom from '@/components/organisms/Chat/ChatRoom';
import ChatHead from '@/components/organisms/Chat/ChatHead';
import ChatForm from '@/components/organisms/Chat/ChatForm';
import io from 'socket.io-client';
const socket = io.connect(process.env.API_HOST);

import { useRouter } from 'next/router';
const ChatMessage = () => {
  const router = useRouter();
  const chat_id = router.query.chat_id;
  const chatRoomRef = React.createRef(null);

  const handleSendMessage = (message) => {
    if (chatRoomRef.current) {
      chatRoomRef.current.scrollTop = chatRoomRef.current.scrollHeight;
    }
    console.log({ message, host: process.env.API_HOST });
  };

  return (
    <ChatLayout className={'flex flex-col justify-between h-screen'}>
      <ChatHead />
      <ChatRoom ref={chatRoomRef} />
      <ChatForm onSendMessage={handleSendMessage} />
    </ChatLayout>
  );
};

export default ChatMessage;

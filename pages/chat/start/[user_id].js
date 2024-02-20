import ChatForm from '@/components/organisms/Chat/ChatForm';
import ChatHead from '@/components/organisms/Chat/ChatHead';
import ChatRoom from '@/components/organisms/Chat/ChatRoom';
import ChatLayout from '@/components/templates/ChatLayout';
import React from 'react';

const ChatStart = () => {
  return (
    <ChatLayout className={'flex flex-col justify-between h-screen'}>
      <ChatHead />
      <div className="h-full max-h-full overflow-auto p-4 flex justify-center"></div>
      <ChatForm isNewContact={true} />
    </ChatLayout>
  );
};

export default ChatStart;

import ChatLayout from '@/components/templates/ChatLayout';
import Image from 'next/image';
import React from 'react';

const Chat = () => {
  return (
    <ChatLayout className={'bg-secondary flex h-screen w-full flex justify-center items-center'}>
      <div>
        <div className="w-80 h-80 relative">
          <Image src={'assets/undraw_chatting_re_j55r.svg'} fill className="object-fit" />
        </div>
        <p className="text-3xl text-gray-400 font-semibold text-center">Talkway Messenger</p>
      </div>
    </ChatLayout>
  );
};

export default Chat;

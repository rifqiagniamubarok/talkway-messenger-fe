import ChatMessageContainer from '@/components/molecules/ChatMessageContainer';
import React, { useEffect, useRef } from 'react';

const ChatRoom = React.forwardRef(({ messages = [], isLoading = false }, ref) => {
  return (
    <div className="h-full max-h-full overflow-auto p-4 bg-[#efeae2]" ref={ref}>
      {!isLoading && (
        <div className="space-y-2">
          {messages.map((msg, index) => (
            <ChatMessageContainer key={index} isSender={msg?.isSender} status={msg?.status} message={msg?.message} />
          ))}
        </div>
      )}
    </div>
  );
});

export default ChatRoom;

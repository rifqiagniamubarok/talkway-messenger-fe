import ChatMessageContainer from '@/components/molecules/ChatMessageContainer';
import React, { useEffect, useRef } from 'react';

const ChatRoom = React.forwardRef((props, ref) => {
  return (
    <div className="h-full max-h-full overflow-auto p-4" ref={ref}>
      <div className="space-y-2">
        <ChatMessageContainer isSender={true} message={'lorem slkjfslkjfal lskjdfkal'} />
        <ChatMessageContainer isSender={false} status="sent" message={'lorem slkjfslkjfal lskjdfkal'} />
        <ChatMessageContainer isSender={false} status="accepted" message={'lorem slkjfslkjfal lskjdfkal'} />
        <ChatMessageContainer isSender={false} status="read" message={'lorem slkjfslkjfal lskjdfkal'} />
        <ChatMessageContainer isSender={true} status="sent" message={'lorem slkjfslkjfal lskjdfkal'} />
        <ChatMessageContainer isSender={true} status="accepted" message={'lorem slkjfslkjfal lskjdfkal'} />
        <ChatMessageContainer isSender={true} status="read" message={'lorem slkjfslkjfal lskjdfkal'} />
        <ChatMessageContainer isSender={true} status="read" message={'lorem slkjfslkjfal lskjdfkal'} />
        <ChatMessageContainer isSender={true} status="read" message={'lorem slkjfslkjfal lskjdfkal'} />
        <ChatMessageContainer isSender={true} status="read" message={'lorem slkjfslkjfal lskjdfkal'} />
        <ChatMessageContainer isSender={true} status="read" message={'lorem slkjfslkjfal lskjdfkal'} />
        <ChatMessageContainer isSender={true} status="read" message={'lorem slkjfslkjfal lskjdfkal'} />
        <ChatMessageContainer isSender={true} status="read" message={'lorem slkjfslkjfal lskjdfkal'} />
        <ChatMessageContainer isSender={true} status="read" message={'lorem slkjfslkjfal lskjdfkal'} />
        <ChatMessageContainer
          isSender={true}
          status="read"
          message={` is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
        />
        <ChatMessageContainer
          isSender={false}
          status="read"
          message={` is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
        />
        <ChatMessageContainer isSender={true} status="read" message={'lorem slkjfslkjfal lskjdfkal'} />
      </div>
    </div>
  );
});

export default ChatRoom;

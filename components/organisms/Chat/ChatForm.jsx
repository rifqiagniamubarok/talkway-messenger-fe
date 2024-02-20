import { Textarea } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { IoSend } from 'react-icons/io5';

const ChatForm = ({ isNewContact, onSendMessage }) => {
  const [message, setMessage] = useState('');
  const router = useRouter();
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };
  const handleSendMessage = (e) => {
    e.preventDefault();

    if (isNewContact) {
      const user_id = router.query.user_id;
      router.push('/chat/' + user_id);
    }
    onSendMessage(message);
    setMessage('');
  };
  const handleMessageChange = ({ target }) => {
    let { value } = target;
    setMessage(value);
  };
  return (
    <div className="bottom-0 w-full right-0 left-0 bg-secondary h-16 ">
      <form className="p-2 flex items-center gap-4" onSubmit={handleSendMessage}>
        <Textarea className="" maxRows={1} variant="faded" color="primary" name="message" value={message} onChange={handleMessageChange} onKeyDown={handleKeyDown}></Textarea>
        <button type="submit">
          <IoSend className="w-6 h-6 text-gray-400 hover:text-primary cursor-pointer" />
        </button>
      </form>
    </div>
  );
};

export default ChatForm;

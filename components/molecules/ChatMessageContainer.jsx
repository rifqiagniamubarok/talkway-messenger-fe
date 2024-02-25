import { Avatar, Card } from '@nextui-org/react';
import { IoCheckmarkSharp, IoCheckmarkDoneSharp } from 'react-icons/io5';
import classNames from 'classnames';
import dayjs from 'dayjs';
import React from 'react';

const ChatMessageContainer = ({ isSender = true, datetime = new Date(), status = 'sent', message }) => {
  const styleClip = {
    right: 'w-0 h-0 border-t-[0px] border-t-transparent border-l-[15px] border-l-[#d7fbd0] border-b-[20px] border-b-transparent',
    left: 'w-0 h-0 border-t-[0px] border-t-transparent border-r-[15px] border-r-white border-b-[20px] border-b-transparent',
  };
  const styleRounded = {
    right: 'rounded-tr-md',
    left: 'rounded-tl-md',
  };
  return (
    <div className={classNames('w-full flex ', isSender ? 'justify-end' : 'justify-start')}>
      <div className="flex gap-0">
        <div className={classNames(isSender && 'order-last', isSender ? styleClip['right'] : styleClip['left'])}></div>
        {/* <div className={classNames(isSender && 'order-last')}>
          <Avatar size="sm" />
        </div> */}
        <div className={classNames('py-1 px-2 rounded-b-md flex flex-col shadow-sm items-end', isSender ? 'bg-[#d7fbd0] rounded-tl-md' : 'bg-white rounded-tr-md')}>
          <div className="text-sm w-full text-left">{message}</div>
          <div className="flex gap-1">
            <p className="text-xs text-gray-600">{dayjs(datetime).format('HH:mm')}</p>
            {status == 'sent' && isSender && <IoCheckmarkSharp className="text-gray-400" />}
            {status == 'accepted' && isSender && <IoCheckmarkDoneSharp className="text-gray-400" />}
            {status == 'read' && isSender && <IoCheckmarkDoneSharp className="text-green-400" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessageContainer;

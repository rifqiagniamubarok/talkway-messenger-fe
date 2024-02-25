import { Avatar, Badge } from '@nextui-org/react';
import dayjs from 'dayjs';
import Link from 'next/link';

const ChatMessagePreview = ({ notif, room_id, unread = 0, name = '', last_message = '', timestamp }) => {
  return (
    <Link href={`/chat/${room_id}`}>
      <div className="w-full px-4 flex items-center gap-4 cursor-pointer hover:bg-gray-100">
        <div>
          <Avatar size="" />
        </div>
        <div className="flex flex-col gap-0.5 w-full border-b border-gray-200 py-3">
          <div className="leading-0 w-full flex justify-between items-center">
            <p className="text-md font-semibold">{name}</p>
            <p className="text-xs">{dayjs(timestamp).format('HH:mm')}</p>
          </div>
          <div className="leading-0 text-xs flex justify-between items-center mr-4">
            <p className="text-sm">{last_message}</p>
            {unread > 0 && <Badge content={unread} color="primary" showOutline={false}></Badge>}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChatMessagePreview;

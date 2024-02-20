import { Avatar, Badge } from '@nextui-org/react';
import Link from 'next/link';

const ChatMessagePreview = ({ notif, room_id, unread = 0 }) => {
  return (
    <Link href={`/chat/${room_id}`}>
      <div className="w-full px-4 flex items-center gap-4 cursor-pointer hover:bg-gray-100">
        <div>
          <Avatar size="" />
        </div>
        <div className="flex flex-col gap-0.5 w-full border-b border-gray-200 py-3">
          <div className="leading-0 w-full flex justify-between items-center">
            <p className="text-md font-semibold">Ahmad yani</p>
            <p className="text-xs">02:50</p>
          </div>
          <div className="leading-0 text-xs flex justify-between items-center mr-4">
            <p className="text-sm">helo helo ini ini</p>
            {unread > 0 && <Badge content={unread} color="primary" showOutline={false}></Badge>}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChatMessagePreview;

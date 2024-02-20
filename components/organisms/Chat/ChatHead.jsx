import { Avatar } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const ChatHead = () => {
  const pathname = usePathname();
  return (
    <Link href={pathname + '?' + 'chatTool=profile'}>
      <div className="w-full py-2 px-8 bg-secondary flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <Avatar />
          <div>
            <p className="text-sm">Ahmad yani</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChatHead;

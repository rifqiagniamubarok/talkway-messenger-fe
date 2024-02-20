import { Avatar, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from '@nextui-org/react';
import classNames from 'classnames';

import { RiChatNewLine } from 'react-icons/ri';
import { BsThreeDotsVertical } from 'react-icons/bs';
import ChatMessagePreview from '@/components/molecules/ChatMessagePreview';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const ChatBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const handleLogout = () => {
    router.push('/');
  };

  return (
    <div className="bg-white border-r border-gray-200 flex flex-col w-full h-screen">
      <div className="w-full">
        <div className="w-full px-8 bg-secondary flex items-center justify-between h-16">
          <Link href={pathname + '?' + 'chatBar=profile'}>
            <Avatar className="cursor-pointer" />
          </Link>
          <div className="flex gap-2 items-center text-gray-600">
            <Link href={pathname + '?' + 'chatBar=newChat'}>
              <RiChatNewLine className="w-6 h-6 cursor-pointer" />
            </Link>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <div className="w-8 h-8 flex justify-center items-center rounded-full hover:bg-gray-200 cursor-pointer">
                  <BsThreeDotsVertical className="w-6 h-6 " />
                </div>
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="settings">Settings</DropdownItem>
                <DropdownItem key="logout" onClick={handleLogout}>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="p-2 border-b border-gray-200">
          <Input variant="faded" placeholder="Search chat" size="sm" />
        </div>
      </div>
      <div className="bg-white h-full max-h-full overflow-auto">
        <div>
          {[...Array(20)].map((_, index) => (
            <ChatMessagePreview key={index} room_id={`room-${index}`} unread={index} />
          ))}
          <ChatMessagePreview />
          <ChatMessagePreview />
        </div>
      </div>
    </div>
  );
};

export default ChatBar;

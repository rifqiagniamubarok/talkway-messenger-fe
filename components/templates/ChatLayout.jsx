import { Avatar, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from '@nextui-org/react';
import classNames from 'classnames';

import { RiChatNewLine } from 'react-icons/ri';
import { BsThreeDotsVertical } from 'react-icons/bs';
import ChatMessagePreview from '../molecules/ChatMessagePreview';
import ChatBar from '../organisms/ChatLayout/ChatBar';
import { useSearchParams } from 'next/navigation';
import Profile from '../organisms/ChatLayout/Profile';
import NewChat from '../organisms/ChatLayout/NewChat';
import UserProfile from '../organisms/UserProfile';
import NewContact from '../organisms/ChatLayout/NewContact';

const ChatLayout = ({ children, className }) => {
  const searchParams = useSearchParams();

  const chatBarName = searchParams.get('chatBar');
  const chatToolName = searchParams.get('chatTool');

  return (
    <div className="grid grid-cols-10 h-screen w-screen">
      <div className="col-span-3 h-screen bg-secondary">
        {!chatBarName && <ChatBar />}
        {chatBarName == 'profile' && <Profile />}
        {chatBarName == 'newChat' && <NewChat />}
        {chatBarName == 'newContact' && <NewContact />}
      </div>

      <div className={classNames(' bg-[#efeae2]', chatToolName ? 'col-span-4' : 'col-span-7')}>
        <div className={classNames(className)}>{children}</div>
      </div>
      {chatToolName && (
        <div className="col-span-3 border-l border-gray-200">
          <UserProfile />
        </div>
      )}
    </div>
  );
};

export default ChatLayout;

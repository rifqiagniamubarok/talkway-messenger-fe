import { Avatar } from '@nextui-org/react';
import Link from 'next/link';

const ContactPreview = ({ target_id, isNotContact = false }) => {
  const url = isNotContact ? `/chat/start/${target_id}` : `/chat/${target_id}`;

  return (
    <Link href={url}>
      <div className="w-full px-4 flex items-center gap-4 cursor-pointer hover:bg-gray-100">
        <div>
          <Avatar size="" />
        </div>
        <div className="flex flex-col gap-0.5 w-full border-b border-gray-200 py-3">
          <div className="leading-0 w-full ">
            <p className="text-md font-semibold">Ahmad yani</p>
          </div>
          <div className="leading-0 text-xs  ">
            <p className="text-sm">helo helo ini ini</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ContactPreview;

import ContactPreview from '@/components/molecules/ContactPreview';
import { Input } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';

const NewContact = () => {
  const pathname = usePathname();
  return (
    <div className="bg-white border-r border-gray-200 flex flex-col w-full h-screen max-h-screen overflow-auto relative">
      <div className="flex flex-col justify-between sticky top-0 z-20 bg-white">
        <div className="bg-[#008069] h-24 flex items-end justify-start p-4">
          <div className="text-white flex items-center gap-8">
            <Link href={pathname + '?chatBar=newChat'}>
              <FaArrowLeft className="cursor-pointer" />
            </Link>
            <p className="text-xl">New contact</p>
          </div>
        </div>
        <div className="p-2 border-b border-gray-200">
          <Input startContent={<FaSearch className="text-gray-400" />} variant="faded" placeholder="Search number" size="sm" />
        </div>
      </div>
      <div className="h-full ">
        <div>
          {[...Array(20)].map((_, index) => (
            <ContactPreview key={index} target_id={index} isNotContact={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewContact;

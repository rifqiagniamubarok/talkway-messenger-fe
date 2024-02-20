import ContactPreview from '@/components/molecules/ContactPreview';
import { Input } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import { IoMdPersonAdd } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';

const NewChat = () => {
  const pathname = usePathname();
  return (
    <div className="bg-white border-r border-gray-200 flex flex-col w-full h-screen max-h-screen overflow-auto">
      <div className="flex flex-col justify-between sticky top-0 bg-white z-20">
        <div className="bg-[#008069] h-24 flex items-end justify-start p-4">
          <div className="text-white flex items-center gap-8">
            <Link href={pathname}>
              <FaArrowLeft className="cursor-pointer" />
            </Link>
            <p className="text-xl">New chat</p>
          </div>
        </div>
        <div className="p-2 border-b border-gray-200">
          <Input startContent={<FaSearch className="text-gray-400" />} variant="faded" placeholder="Search name or number" size="sm" />
        </div>
      </div>
      <div className="h-full ">
        <Link href={pathname + '?chatBar=newContact'}>
          <div className=" px-4 flex items-center gap-2  cursor-pointer hover:bg-gray-100">
            <div>
              <div className="bg-[#008069] h-12 w-12 flex items-center justify-center rounded-full ">
                <IoMdPersonAdd className="text-white" />
              </div>
            </div>
            <div className="flex flex-col gap-0.5 w-full border-b border-gray-200 py-6">New contact</div>
          </div>
        </Link>
        <p className="text-[#008069] ml-6 my-8">CONTACT ON TALKAWAY</p>
        <div>
          {[...Array(20)].map((_, index) => (
            <ContactPreview key={index} target_id={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewChat;

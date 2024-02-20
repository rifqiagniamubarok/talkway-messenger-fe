import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdAccountCircle, MdClose, MdDelete } from 'react-icons/md';
import { BiSolidDislike } from 'react-icons/bi';
import { ImBlocked } from 'react-icons/im';

const UserProfile = () => {
  const pathname = usePathname();
  return (
    <div className="h-screen bg-secondary">
      <div className="w-full py-2 px-6 bg-secondary flex items-center justify-between h-16">
        <div className="flex items-center gap-8">
          <Link href={pathname}>
            <MdClose className="cursor-pointer" />
          </Link>
          <div>
            <p className="text-sm">Ahmad yani</p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-white py-8">
          <div className="flex flex-col items-center gap-4">
            <div className="w-44 h-44 bg-gray-400 rounded-full flex justify-center items-center relative overflow-hidden">
              <MdAccountCircle className="w-full h-full text-gray-300 scale-150" />
            </div>
            <div className="text-center">
              <p className="text-xl">Ahmad Unix</p>
              <p className="text-base text-gray-600">62812-8313-3153</p>
            </div>
          </div>
        </div>
        <div className="bg-white py-4 px-6 space-y-2">
          <p className="text-sm text-gray-600">About</p>
          <p>Silent</p>
        </div>
        <div className="bg-white py-4 px-6 space-y-2 cursor-pointer">
          <p className="text-sm text-gray-600">Media, Link and docs</p>
        </div>
        <div className="bg-white  ">
          <div className="py-4 px-6 hover:bg-gray-50 flex items-center gap-4 cursor-pointer text-red-500">
            <ImBlocked /> <p>Block Ahmad Yani</p>
          </div>
          <div className="py-4 px-6 hover:bg-gray-50 flex items-center gap-4 cursor-pointer text-red-500">
            <BiSolidDislike /> <p>Report Ahmad Yani</p>
          </div>
          <div className="py-4 px-6 hover:bg-gray-50 flex items-center gap-4 cursor-pointer text-red-500">
            <MdDelete /> <p>Delete Ahmad Yani</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

import { Avatar, Input } from '@nextui-org/react';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { MdAccountCircle, MdPhotoCamera, MdEdit } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa6';

const Profile = () => {
  const pathname = usePathname();
  const [isEditName, setIsEditName] = useState(false);
  const [isEditAbout, setIsEditAbout] = useState(false);

  const handleToggleEditName = () => {
    setIsEditName(!isEditName);
  };
  const handleToggleEditAbout = () => {
    setIsEditAbout(!isEditAbout);
  };

  const handleSaveEditName = () => {
    handleToggleEditName();
  };
  const handleSaveEditAbout = () => {
    handleToggleEditAbout();
  };

  return (
    <div className="bg-white border-r border-gray-200 flex flex-col w-full">
      <div className="bg-[#008069] h-24 flex items-end justify-start p-4">
        <div className="text-white flex items-center gap-8">
          <Link href={pathname}>
            <FaArrowLeft className="cursor-pointer" />
          </Link>
          <p className="text-xl">Profile</p>
        </div>
      </div>
      <div className="h-full bg-secondary">
        <div className="flex justify-center my-8">
          <div className="w-44 h-44 bg-gray-400 rounded-full flex justify-center items-center relative overflow-hidden">
            <div className="w-44 h-44 bg-gray-700 absolute inset-0 z-20 opacity-75 flex justify-center items-center cursor-pointer">
              <div className="text-white flex flex-col justify-center items-center">
                <MdPhotoCamera className="w-8 h-8" />
                <p>Change Profile</p>
                <p>Picture</p>
              </div>
            </div>
            <MdAccountCircle className="w-full h-full text-gray-300 scale-150" />
          </div>
        </div>
        <div className={classNames('w-full bg-white py-4 px-8 ', isEditName ? 'space-y-0' : 'space-y-4')}>
          <p className="text-[#008069] text-sm">Your name</p>
          {!isEditName && (
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Coba</p>
              <MdEdit className="text-gray-600 cursor-pointer" onClick={handleToggleEditName} />
            </div>
          )}
          {isEditName && <Input variant="underlined" color="primary" endContent={<FaCheck className="cursor-pointer" onClick={handleSaveEditName} />} />}
        </div>
        <div className={classNames('w-full bg-secondary py-4 px-8 ')}>
          <p>This is not your username or pin. This will be visible to your talkway contact</p>
        </div>
        <div className={classNames('w-full bg-white py-4 px-8 ', isEditAbout ? 'space-y-0' : 'space-y-4')}>
          <p className="text-[#008069] text-sm">About</p>
          {!isEditAbout && (
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Coba</p>
              <MdEdit className="text-gray-600 cursor-pointer" onClick={handleToggleEditAbout} />
            </div>
          )}
          {isEditAbout && <Input variant="underlined" color="primary" endContent={<FaCheck className="cursor-pointer" onClick={handleSaveEditAbout} />} />}
        </div>
      </div>
    </div>
  );
};

export default Profile;

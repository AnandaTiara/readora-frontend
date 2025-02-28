import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";

interface KomenProps {
  children: string;
  avatar: string;
}

const Komen: React.FC<KomenProps> = ({ children, avatar }) => {
  return (
    <div className="flex items-center bg-primary-500 text-white px-4 py-2 rounded-full w-fit max-w-lg shadow-md">
      <img src={avatar} alt="User Avatar" className="w-6 h-6 rounded-full mr-2" />
      <span className="text-sm font-medium flex-1">{children}</span>
      <IoEllipsisVertical className="ml-2" />
    </div>
  );
};

export default Komen;

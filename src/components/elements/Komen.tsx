import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { cn } from "../../utils/cn";

interface KomenProps {
  children: string;
  avatar: string;
  className?: string;
}

const Komen: React.FC<KomenProps> = ({ children, avatar, className}) => {
  return (
    <div className={cn("flex items-center bg-primary-500 text-white px-2 py-1 w-fit max-w-[300px] shadow-sm rounded-r-full rounded-t-full text-xs" ,className ||"")}> 
      <img src={avatar} alt="User Avatar" className="w-5 h-5 rounded-full mr-1" />
      <span className="text-xs font-medium flex-1">{children}</span>
      <IoEllipsisVertical className="ml-1 text-sm" />
    </div>
  );
};

export default Komen;

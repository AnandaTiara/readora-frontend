import React from "react";

interface BulatMainProps {
  children: string | number;
}
const BulatMain: React.FC<BulatMainProps> = ({ children }) => {
  return (
    <div className="w-10 h-10 p-15 flex items-center justify-center bg-accent-500 text-white font-WulkanDisplayBold text-7xl rounded-full">
      {children}
    </div>
  );
};

export default BulatMain;

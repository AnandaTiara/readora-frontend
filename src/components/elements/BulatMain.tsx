import React from "react";

interface BulatMainProps {
  children: string | number;
}
const BulatMain: React.FC<BulatMainProps> = ({ children }) => {
  return (
    <div className="lg:w-10 lg:h-10 w-5 h-5 p-8 lg:p-15 flex text-3xl items-center justify-center bg-accent-500 text-white font-WulkanDisplayBold lg:text-7xl rounded-full">
      {children}
    </div>
  );
};

export default BulatMain;

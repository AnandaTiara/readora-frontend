
import { HiUsers } from "react-icons/hi";
import { IoBookSharp } from "react-icons/io5";

const Section1 = () => {
  return (
    <div className="bg-primary-700 text-white py-48 flex flex-col items-center">
      <h1 className="text-7xl font-WulkanDisplayBold mb-20">Your Gateway to Endless Knowledge</h1>

      <div className="flex justify-center items-center space-x-40">
        <div className="flex flex-col items-center text-center gap-3">
          <span className=" font-WulkanDisplayBold text-5xl">186+</span>
          <HiUsers className="text-2xl mt-1" />
          <span className="font-AileronBold text-3xl">Users</span>
        </div>

        {/* Garis pemisah */}
        <div className="w-px h-42 bg-white"></div>

        <div className="flex flex-col items-center text-center gap-3">
          <span className="font-WulkanDisplayBold text-5xl">190+</span>
          <IoBookSharp className="text-2xl mt-1" />
          <span className="font-AileronBold text-3xl">Books</span>
        </div>
      </div>
    </div>
  );
};

export default Section1;

import { HiUsers } from "react-icons/hi";
import { IoBookSharp } from "react-icons/io5";

const Section1 = () => {
  return (
    <div className="bg-primary-700 text-white py-48 flex flex-col items-center w-full mt-4">
      <h1 className="flex text-3xl lg:text-6xl text-center font-WulkanDisplayBold mb-20 md:text-7xl md:text-center md:max-w-screen">
        Your Gateway to Endless Knowledge
      </h1>

      <div className="flex justify-between w-3/4 items-center lg:space-x-40">
        <div className="flex flex-col items-center text-center gap-3">
          <span className=" font-WulkanDisplayBold text-5xl">186+</span>
          <HiUsers className="text-5xl mt-1" />
          <span className="font-AileronBold text-3xl">Users</span>
        </div>

        {/* Garis pemisah */}
        <div className="w-px h-42 bg-white"></div>

        <div className="flex flex-col items-center text-center gap-3">
          <span className="font-WulkanDisplayBold text-5xl">190+</span>
          <IoBookSharp className="text-5xl mt-1" />
          <span className="font-AileronBold text-3xl">Books</span>
        </div>
      </div>
    </div>
  );
};

export default Section1;

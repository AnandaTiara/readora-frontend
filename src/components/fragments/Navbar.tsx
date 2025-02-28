import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Button from "../elements/Button";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);

  return (
    <nav className="fixed w-full top-4 z-10 flex justify-center items-center">
      <div className="rounded-full flex justify-between items-center px-16 py-4 w-[95%] p-4 backdrop-blur bg-[rgba(255, 255, 255, 0.70)]">
        <div className="flex gap-2 items-center">
          <div className="-mt-2">
            <img src="/image/Logo.png" alt="Logo Readora" />
          </div>
          <div className=" flex items-end">
            <p className="text-xl font-WulkanDisplayLight text-gray-900">
              Readora
            </p>
          </div>
        </div>

        {/* MENUS */}
        <div className="hidden md:flex gap-6 text-neutral-900 z-10">
          <div className="relative">
            <button
              onClick={() => setIsBrowseOpen(!isBrowseOpen)}
              className="hover:text-black flex items-center cursor-pointer"
            >
              Browse <MdOutlineKeyboardArrowDown />
            </button>
            {isBrowseOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Categories
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Popular
                </a>
              </div>
            )}
          </div>
          <a href="#" className="hover:text-black">
            Community
          </a>
          <a href="#" className="hover:text-black">
            Saved
          </a>
        </div>

        {/* Search Bar */}
        <div className="relative flex items-center w-1/3 z-10">
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Search"
              className="border-[#dde1eb] h-14 w-full p-3 bg-white border rounded-lg mt-2 mb-2 outline-none transition-all duration-200 focus:border-accent-500 "
            />
            <button className="p-2 bg-accent-500 text-white absolute top-1/2 right-4 transform -translate-y-1/2 rounded-full hover:bg-accent-300 active:bg-accent-700 cursor-pointer">
              <BiSearch size={24} />
            </button>
          </div>
        </div>

        <Button className="mt-0 rounded-lg z-10 cursor-pointer">Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;

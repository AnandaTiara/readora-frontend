import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Button from "./Button";
import { BiSearch } from "react-icons/bi";
import { BiFontSize } from "react-icons/bi";
import { PiPlusCircle } from "react-icons/pi";
import { PiMinusCircle } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "../../utils/cn";
import { IoMoon } from "react-icons/io5";
import { MdLogin } from "react-icons/md";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Navbar2 = ({ className }: Props) => {
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full top-3 flex justify-center items-center max-w-screen z-40">
      <div
        className={cn(
          "rounded-xl md:rounded-full px-8 py-1 w-[95%] p-4 backdrop-blur-[19px] bg-white/50",
          className || ""
        )}
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="-mt-2 ml-5">
              <img src="src/assets/image/Logo.png" alt="Logo Readora" />
            </div>
            <div className=" flex items-end">
              <p
                className="text-xl font-WulkanDisplayLight text-gray-900 cursor-pointer"
                onClick={() => navigate("/")}
              >
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
            <Link to="/Community" className="hover:text-black">
              {" "}
              Community
            </Link>
            <Link to="/Saved" className="hover:text-black">
              {" "}
              Saved
            </Link>
          </div>

          {/* Search Bar */}
          <div className="relative hidden md:flex items-center w-1/3 z-10">
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

          <div>
            <Button className="mt-0 rounded-lg z-10 cursor-pointer hidden md:block mr-5">
              <Link to="/Login"> Sign up</Link>
            </Button>
            <div className="block md:hidden">
              <MdLogin className="text-3xl mr-4" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="ml-5 flex items-center gap-4">
            <div className="w-24">
              <img
                src="src\assets\image\KlaraAndTheSun.jpeg"
                className="rounded-md"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-lg font-AileronBold">Klara And The Sun</h2>
              <p className="text-sm text-neutral-800 font-AileronRegular" >Kazuo Ishiguro</p>
            </div>
          </div>
          <div>
            <div className="flex flex-row mr-4 gap-3 cursor-pointer">
              <IoMoon />
              <PiPlusCircle/>
              <BiFontSize />
              <PiMinusCircle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;

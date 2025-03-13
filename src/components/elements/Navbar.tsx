import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Button from "./Button";
import { BiSearch } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "../../utils/cn";
import { MdLogin } from "react-icons/md";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Navbar = ({ className }: Props) => {
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
                <div className="absolute left-0 mt-2 w-160 bg-neutral-100 shadow-lg rounded-md py-2 z-50 ">
                  <h2 className="text-2xl font-AileronBold text-primary-700 ml-3">
                    Browse
                  </h2>
                  <div className="grid grid-cols-4">
                    <Link
                      to="/search"
                      className="block px-4 py-2 hover:text-accent-500"
                    >
                      Fantasy
                    </Link>
                    <Link
                      to="/search"
                      className="block px-4 py-2 hover:text-accent-500"
                    >
                      Science Fiction
                    </Link>
                    <Link
                      to="/search"
                      className="block px-4 py-2 hover:text-accent-500"
                    >
                      Mystery
                    </Link>
                    <Link
                      to="/search"
                      className="block px-4 py-2 hover:text-accent-500"
                    >
                      Thriller
                    </Link>
                    <Link
                      to="/search"
                      className="block px-4 py-2 hover:text-accent-500"
                    >
                      Horror
                    </Link>
                    <Link
                      to="/search"
                      className="block px-4 py-2 hover:text-accent-500"
                    >
                      Romance
                    </Link>
                    <Link
                      to="/search"
                      className="block px-4 py-2 hover:text-accent-500"
                    >
                      Historical Fiction
                    </Link>
                    <Link
                      to="/search"
                      className="block px-4 py-2 hover:text-accent-500"
                    >
                      Contemporary
                    </Link>
                    <Link
                      to="/search"
                      className="block px-4 py-2 hover:text-accent-500"
                    >
                      Adventure
                    </Link>
                    <Link
                      to="/search"
                      className="block px-4 py-2 hover:text-accent-500"
                    >
                      Drama
                    </Link>
                    <Link
                      to="/search"
                      className="block px-4 py-2 hover:text-accent-500"
                    >
                      Biography
                    </Link>
                    <Link
                      to="/search"
                      className="block px-4 py-2 hover:text-accent-500"
                    >
                      Self Help
                    </Link>
                    <Link
                      to="/search"
                      className="block px-4 py-2 hover:text-accent-500"
                    >
                      History
                    </Link>
                    <Link
                      to="/search"
                      className="block px-4 py-2 hover:text-accent-500"
                    >
                      Business
                    </Link>
                    <Link
                      to="/search"
                      className="block px-4 py-2 hover:text-accent-500"
                    >
                      Science
                    </Link>
                    <Link
                      to="/search"
                      className="block px-4 py-2 hover:text-accent-500"
                    >
                      Religion
                    </Link>
                    <Link
                      to="/search"
                      className="block px-4 py-2 hover:text-accent-500"
                    >
                      Poetry
                    </Link>
                    <Link
                      to="/search"
                      className="block px-4 py-2 hover:text-accent-500"
                    >
                      Travel
                    </Link>
                    <Link
                      to="/search"
                      className="block px-4 py-2 hover:text-accent-500"
                    >
                      Art & Photography
                    </Link>
                    <Link
                      to="/search"
                      className="block px-4 py-2 hover:text-accent-500"
                    >
                      Mental Help
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/Community" className="hover:text-black">
              {" "}
              Community{" "}
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
                className="border-[#dde1eb] h-14 w-full p-3 bg-white border rounded-lg mt-2 mb-2 outline-none transition-all duration-200 focus:border-accent-500 z-10"
              />
              <button className="p-2 bg-accent-500 text-white absolute top-1/2 right-4 transform -translate-y-1/2 rounded-full hover:bg-accent-300 active:bg-accent-700 cursor-pointer">
                <BiSearch size={24} />
              </button>
            </div>
          </div>

          <div>
            <Button className="mt-0 rounded-lg  cursor-pointer hidden md:block mr-5 z-10">
              <Link to="/Login"> Sign up</Link>
            </Button>
            <div className="block md:hidden">
              <MdLogin className="text-3xl mr-4" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

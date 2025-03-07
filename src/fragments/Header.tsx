import React from "react";
import Button from "../components/elements/Button";
import Komen from "../components/elements/Komen";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="bg-neutral-500 md:h-screen flex flex-col -mb-4 w-full">
      <div className="mt-30">
        <div className="flex flex-col items-center text-center mt-80">
          <h1 className="text-7xl sm:text-7xl font-WulkanDisplayLight sm:-mt-20 ">
            Your Reading Experience,
          </h1>
          <h2 className="text-5xl md:text-6xl font-WulkanDisplaySemiBold mt-5 ">
            redefined.
          </h2>
          <p className="max-w-xl text-neutral-900 text-base font-AileronRegular mt-15 md:mt-4">
            effortlessly uncover meanings and insights with a simple highlight,
            turning every page into a journey of discovery
          </p>
          <Button className="rounded-xl px-20 py-5 font-AileronSemiBold cursor-pointer">
          <Link to="/Mainpage"> Masuk</Link>
          </Button>
        </div>
        <div className="flex flex-col overflow-hidden items-center mt-12 gap-2 sm:h-[3485px]">
          <Komen avatar="src/assets/image/Ellipse 1.svg" className="absolute bottom-140 right-13 md:bottom-82 md:right-29">Nambahin buku sendiri dan pake fitur Readora... a game changer!</Komen>
          <Komen avatar="src/assets/image/Ellipse 3.svg" className="absolute right-2 top-72 max-w-[180px] md:max-w-[280px] md:top-55 md:right-30">Segampang itu buat ngejelasin makna!</Komen>
          <Komen avatar="src/assets/image/Ellipse 2.svg" className="absolute top-115 left-20 md:top-42 md:left-110 md:max-w-xs">Seneng banget dapet temen membaca yang insightnya seru seru!</Komen>
        </div>
      </div>

      <div>
        <div className="absolute bottom-0 left-0 w-50 md:w-[250px]">
          <img src="src/assets/image/book2.png" alt="Book 1" />
        </div>
        <div className="absolute bottom-0 right-0 w-60 md:w-[250px]">
          <img src="src/assets/image/book 4.png" alt="Book 2" />
        </div>
        <div className="absolute top-0 left-0 w-50 md:w-[250px]">
          <img src="src/assets/image/book1.png" alt="Book 3" />
        </div>
        <div className="absolute top-0 right-0 w-50 md:w-[250px]">
          <img src="src/assets/image/book 3.png" alt="Book 4" />
        </div>
      </div>
      
      
    </div>
  );
};

export default Header;

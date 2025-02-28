import React from "react";
import { FaSearch } from "react-icons/fa";
import Navbar from "./Navbar";
import Button from "../elements/Button";
import Komen from "../elements/Komen";

const Header: React.FC = () => {
  return (
    <div className="bg-neutral-500 flex flex-col h-screen">
      <div className="mt-40">
        <div className="flex flex-col items-center text-center mt-40">
          <h1 className="text-6xl md:text-9xl font-WulkanDisplayLight  ">
            Your Reading Experience,
          </h1>
          <h2 className="text-5xl md:text-7xl font-WulkanDisplayBold mt-5">
            redefined.
          </h2>
          <p className="max-w-xl text-neutral-900 mt-4 text-base font-AileronRegular">
            Effortlessly uncover meanings and insights with a simple highlight,
            turning every page into a journey of discovery.
          </p>
          <Button className="rounded-full px-20 py-5 font-AileronSemiBold">
            Masuk
          </Button>
        </div>
        <div className="flex flex-col items-center mt-12 gap-2">
          <Komen avatar="/image/Ellipse 1.svg">Nambahin buku sendiri dan pake fitur Readora... a game changer!</Komen>
          <Komen avatar="/image/Ellipse 3.svg">Segampang itu buat ngejelasin makna!</Komen>
          <Komen avatar="/image/Ellipse 2.svg">Seneng banget dapet temen membaca yang insightnya seru seru!</Komen>
        </div>
      </div>

      <div>
        <div className="absolute bottom-0 left-0 w-40 md:w-[400px] ">
          <img src="/image/book2.png" alt="Book 1" />
        </div>
        <div className="absolute bottom-0 right-0 w-40 md:w-[400px]">
          <img src="/image/book 4.png" alt="Book 2" />
        </div>
        <div className="absolute top-0 left-0 w-40 md:w-[400px]">
          <img src="/image/book1.png" alt="Book 3" />
        </div>
        <div className="absolute top-0 right-0 w-40 md:w-[400px]">
          <img src="/image/book 3.png" alt="Book 4" />
        </div>
      </div>
      
      
    </div>
  );
};

export default Header;

import React from "react";
import { IoSearch } from "react-icons/io5";

const cek = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        className="border rounded-lg pl-4 pr-12 py-2 bg-white border-[#DDE1EB] focus:outline-none focus:ring-2 focus:ring-green-400 w-full"
      />
      <button className="absolute right-2 bg-orange-500 text-white rounded-full p-2 hover:bg-orange-600">
        <IoSearch size={16} />
      </button>
    </div>
  );
};

export default cek;

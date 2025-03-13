import React from "react";
import Button from "./Button";

const BookSaved: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-neutral-500 rounded-[32px] p-6 w-[18rem] lg:w-[25rem] flex flex-col items-center shadow-lg">
        <div className="bg-[#FFEA9F] rounded-full w-20 h-20 flex items-center justify-center mb-4">
          <span className="text-3xl">🎉</span>
        </div>
        <p className="text-2xl font-AileronSemiBold text-black mb-4 mt-3">Book Saved!</p>
        <Button className="bg-black rounded-8 w-[13rem] lg:w-[14rem]">Thanks!</Button>
      </div>
    </div>
  );
};

export default BookSaved;

import React from "react";
import Button from "./Button";

const Limit: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-neutral-500 rounded-[32px] p-6 w-[18rem] lg:w-[30rem] flex flex-col items-center shadow-lg">
        <img
          src="src/assets/image/Limit Illustration.png"
          alt="Limit Illustration"
          className="w-70"
        />

        <p className="text-2xl font-AileronSemiBold text-black mb-4 mt-3 text-center max-w-md">
          Sorry.. limit reached. <br />Consider subscribing for further condition{" "}
        </p>
        <Button className="bg-primary-500 hover:bg-primary-300 active:bg-primary-700 rounded-8 w-[10rem] lg:w-[15rem]">
          Thanks!
        </Button>
      </div>
    </div>
  );
};

export default Limit;

import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="md:w-screen flex md:h-screen md:flex-row flex-col-reverse bg-[#f8f8e6]">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:p-8">
        {children}
      </div>

      <div className='w-full flex  items-center justify-center '>
        <img
          src="/image/Login Art.png"
          alt="Login Illustration"
          className="p-4 md:h-screen rounded-3xl object-contain "
        />
      </div>
    </div>
  );
};

export default AuthLayout;

import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col-reverse pb-18 md:pb-0 md:flex-row  min-h-screen lg:h-screen w-screen bg-neutral-500  overflow-hidden">
      <div className="w-full md:w-1/2 flex  px-4  flex-col justify-center items-center md:p-8">
        {children}
      </div>

      <div className='w-full md:w-1/2  flex items-center lg:justify-center '>
        <img
          src="src/assets/image/Login Art.png"
          alt="Login Illustration"
          className="h-100 w-full p-4 lg:p-10  object-cover md:h-screen rounded-3xl lg:object-contain "
        />
      </div>
    </div>
  );
};

export default AuthLayout;

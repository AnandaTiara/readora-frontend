import React from "react";
import { cn } from "../../utils/cn";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  children?: string | React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type, className, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn("mt-4 px-10 py-3 bg-accent-500 rounded-xl text-neutral-50 text-base font-AileronSemiBold flex justify-center items-center hover:bg-accent-300 active:bg-accent-700 transition cursor-pointer", className || "")}
    >
      {children}
    </button>
  );
};

export default Button;

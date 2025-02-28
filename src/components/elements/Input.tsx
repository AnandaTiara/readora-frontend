import React, { useState } from "react";
import { IconType } from "react-icons";
import { cn } from "../../utils/cn";
import { ClassNameValue } from "tailwind-merge";

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  id?: string;
  icon?: string | IconType;
  children?: React.ReactNode
  className?: ClassNameValue
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, id, icon, children, className}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <label className="text-neutral-900 font-AileronRegular cursor-pointer" htmlFor={id} >{label}</label>
      <input
        type={type}
        className={cn(`w-full p-3 bg-white border rounded-lg mt-2 mb-2 outline-none transition-all duration-200 
          ${isFocused ? "border-accent-500" : "border-[#dde1eb]"}`, className ? className.toString() : "")}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        id = {id}
      />
      {children}
    </div>
  );
};

export default Input;
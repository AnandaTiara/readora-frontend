import React, { useState } from "react";
import { cn } from "../../utils/cn";
import { ClassNameValue } from "tailwind-merge";

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  id?: string;
  children?: React.ReactNode
  className?: ClassNameValue
  setValue: React.Dispatch<React.SetStateAction<string>>
  value?: string
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, id, children, className, value, setValue}) => {
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
        onChange={(e) => setValue(e.target.value)}
        id = {id}
      />
      {children}
    </div>
  );
};

export default Input;
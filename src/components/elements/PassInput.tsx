import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface PasswordInputProps {
  label?: string;
  id?: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  value: string
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, id, value, setValue}) => {
  const [isFocused, setIsFocused] = useState(false); 
  const [isView, setIsView] = useState(false);

  return (
    <div>
      <label className="text-neutral-900 text-base font-AileronRegular cursor-pointer" htmlFor={id} >
        {label}
      </label>
      <div
        className={`flex items-center w-full p-3 rounded-lg mt-1 border bg-white ${
          isFocused ? "border-accent-500" : "border-[#dde1eb]"
        }`}
      >
        <input
          type={isView ? "text" : "password"}
          value={value}
          className="flex-1 outline-none"
          placeholder="Password"
          id={id}
          onFocus={() => setIsFocused(true)} 
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={() => setIsView(!isView)}
          className="ml-2 text-gray-500 focus:outline-none"
          type="button"
        >
          {isView ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
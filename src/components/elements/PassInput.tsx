import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, id, onFocus, onBlur, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isView, setIsView] = useState(false);

    return (
      <div>
        {label && (
          <label
            className="text-neutral-900 text-base font-AileronRegular cursor-pointer"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <div
          className={`flex items-center w-full p-3 rounded-lg mt-1 border bg-white ${
            isFocused ? "border-accent-500" : "border-[#dde1eb]"
          }`}
        >
          <input
            {...props}
            ref={ref}
            type={isView ? "text" : "password"}
            className="flex-1 outline-none"
            placeholder="Password"
            id={id}
            onFocus={(e) => {
              setIsFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur?.(e);
            }}
          />
          <button
            onClick={() => setIsView(!isView)}
            className="ml-2 text-gray-500 focus:outline-none"
            type="button"
          >
            {isView ? (
              <FiEyeOff className="w-5 h-5" />
            ) : (
              <FiEye className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
export default PasswordInput;

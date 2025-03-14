import React, { useState } from "react";
import { cn } from "../../utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, onFocus, onBlur, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div>
        {label && (
          <label
            htmlFor={props.id}
            className="text-neutral-900 font-AileronRegular cursor-pointer"
          >
            {label}
          </label>
        )}
        <input
          {...props}
          ref={ref}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e); 
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          className={cn(
            `w-full p-3 bg-white border rounded-lg mt-2 mb-2 outline-none transition-all duration-200 
            ${isFocused ? "border-accent-500" : "border-[#dde1eb]"}`,
            className ? className.toString() : ""
          )}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
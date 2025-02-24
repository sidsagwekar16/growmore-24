import React from "react";
import { InputFieldProps } from "./types.ts";

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  const inputId = `${label.toLowerCase()}-input`;

  return (
    <div className="flex flex-col my-auto w-full max-md:max-w-full">
      <label
        htmlFor={inputId}
        className="gap-1 self-start text-base font-medium leading-loose text-gray-600"
      >
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        minLength={10}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="flex overflow-hidden gap-2 items-center px-5 py-2 mt-1.5 w-full text-sm leading-loose text-gray-900 rounded-xl border border-gray-300 border-solid shadow-sm max-md:max-w-full"
      />
    </div>
  );
};

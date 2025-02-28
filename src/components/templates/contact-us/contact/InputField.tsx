import React from "react";
import { InputFieldProps } from "./types.ts";

export const InputField: React.FC<InputFieldProps & { icon?: React.ReactNode }> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  required = false,
  icon,
}) => {
  const inputId = `${label.toLowerCase()}-input`;

  return (
    <div className="flex flex-col my-2 w-full max-md:max-w-full">
      <label
        htmlFor={inputId}
        className="text-base font-medium leading-loose text-gray-600"
      >
        {label}
      </label>
      <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-sky-500">
        {icon}
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className="flex-1 text-sm text-gray-900 bg-transparent outline-none"
        />
      </div>
    </div>
  );
};

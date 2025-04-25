import React from "react";
import { FormData } from "./types.ts";
import { InputField } from "./InputField.tsx";
import { FiUser } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { TbPhone } from "react-icons/tb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface ContactFormProps {
  formData: FormData;
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onFieldChange: (field: keyof FormData, value: string) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  isSubmitting,
  onSubmit,
  onFieldChange,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col self-stretch h-max p-3 mx-auto my-auto w-full bg-white rounded-lg border-solid border-slate-200 xl:w-[30vw] border-2 md:p-8"
    >
      <InputField
        label="Name"
        type="text"
        placeholder="Enter your name"
        value={formData.name}
        onChange={(value) => onFieldChange("name", value)}
        required
        icon={<FiUser className="text-gray-500 text-lg font-manrope" />}
      />

      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(value) => onFieldChange("email", value)}
        required
        icon={<MdOutlineEmail className="text-gray-500 text-lg font-manrope" />}
      />

      {/* Phone Number with Country Code */}
<div className="flex flex-col w-full mb-4">
  <label className="text-base font-medium text-gray-600 font-manrope mb-2">
    Phone Number
  </label>
  <div className="flex items-center gap-2">
    <select
      className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-sky-500"
      value={formData.countryCode}
      onChange={(e) => onFieldChange("countryCode", e.target.value)}
    >
      <option value="+91">🇮🇳 +91</option>
      <option value="+1">🇺🇸 +1</option>
      <option value="+44">🇬🇧 +44</option>
      <option value="+61">🇦🇺 +61</option>
      {/* Add more as needed */}
    </select>

    <div className="relative flex-grow">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 text-lg">
        <TbPhone />
      </span>
      <input
        type="tel"
        placeholder="Enter your phone number"
        value={formData.phoneNumber}
        onChange={(e) => onFieldChange("phoneNumber", e.target.value)}
        required
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-sky-500"
      />
    </div>
  </div>
</div>


      <div className="flex flex-col w-full">
        <label
          htmlFor="message-input"
          className="text-base font-medium text-gray-600 font-manrope"
        >
          Message
        </label>
        <textarea
          id="message-input"
          placeholder="Write your message"
          value={formData.message}
          onChange={(e) => onFieldChange("message", e.target.value)}
          required
          rows={4}
          className="mt-2 p-4 text-sm text-gray-700 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-sky-500 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex justify-center mt-6 px-5 py-3 w-full font-manrope text-lg text-white bg-sky-800 rounded-xl shadow-sm transition-opacity duration-200 hover:bg-sky-700 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Send Message"} <span className=" my-auto mx-2"><MdOutlineKeyboardArrowRight/></span>
      </button>
    </form>
  );
};
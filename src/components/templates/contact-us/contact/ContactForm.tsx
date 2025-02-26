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
      className="flex flex-col -ml-2 self-stretch h-max p-3 mx-auto my-auto bg-white rounded-lg border-solid border-slate-200 w-[90vw] sm:w-[50vw] border-2 max-w-lg md:p-8"
    >
      <InputField
        label="Name"
        type="text"
        placeholder="Enter your name"
        value={formData.name}
        onChange={(value) => onFieldChange("name", value)}
        required
        icon={<FiUser className="text-gray-500 text-lg" />}
      />

      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(value) => onFieldChange("email", value)}
        required
        icon={<MdOutlineEmail className="text-gray-500 text-lg" />}
      />

      <InputField
        label="Phone Number"
        type="text"
        placeholder="Enter your Phone Number"
        value={formData.phoneNumber}
        onChange={(value) => onFieldChange("phoneNumber", value)}
        required
        icon={<TbPhone className="text-gray-500 text-lg" />}
      />

      <div className="flex flex-col w-full">
        <label
          htmlFor="message-input"
          className="text-base font-medium text-gray-600"
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
        className="flex justify-center mt-6 px-5 py-3 w-full text-lg font-semibold text-white bg-sky-800 rounded-xl shadow-sm transition-opacity duration-200 hover:bg-sky-700 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Send Message"} <span className=" my-auto mx-2"><MdOutlineKeyboardArrowRight/></span>
      </button>
    </form>
  );
};
import * as React from "react";
import { NewsletterInputProps } from "./types";

export const NewsletterInput: React.FC<NewsletterInputProps> = ({
  placeholder,
}) => (
  <form className="flex flex-col mt-3 sm:mt-6 w-full text-base max-w-[373px]">
    <label htmlFor="emailInput" className="text-zinc-700">
      Get daily updates by subscribing
    </label>
    <input
      id="emailInput"
      type="email"
      className="flex-1 shrink gap-2 self-stretch p-3 mt-3 w-full border border-solid border-zinc-800 min-h-[48px] text-zinc-400"
      placeholder={placeholder}
      aria-label="Email subscription input"
    />
    <button
      type="submit"
      className="gap-2 self-start px-6 py-4 mt-6 text-sm text-center text-white bg-slate-400 min-h-[48px] max-md:px-5"
    >
      Get To Know Me
    </button>
  </form>
);

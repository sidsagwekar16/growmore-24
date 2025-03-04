import * as React from "react";
import { NewsletterInputProps } from "./types";

export const NewsletterInput: React.FC<NewsletterInputProps> = ({
  placeholder,
}) =>{

    const [email, setEmail] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState("");

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch(
        "https://growmore-hkbmhna2bxchd4bw.eastasia-01.azurewebsites.net/subscribe?email=" +
          encodeURIComponent(email),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setMessage("Successfully subscribed!")
        setEmail("");
      } else {
        setMessage("Subscription failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
    setLoading(false);
  }
  
  return(
  <form className="flex flex-col mt-3 sm:mt-6 w-full text-base max-w-[373px]" onSubmit={e=>handleSubmit(e)}>
    <label htmlFor="emailInput" className="text-zinc-700 font-manrope">
      Get daily updates by subscribing
    </label>
    <input
      id="emailInput"
      type="email"
      className="flex-1 shrink gap-2 font-manrope self-stretch p-3 mt-3 w-full border border-solid rounded-md border-zinc-800 min-h-[48px] text-zinc-400"
      placeholder={placeholder}
      onChange={e=>setEmail(e.target.value)}
      aria-label="Email subscription input"
    />
    {message && <p className="text-sm text-black mt-2">{message}</p>}
    <button
      type="submit"
      className="gap-2 self-start font-manrope px-6 py-4 mt-6 text-sm text-center text-white rounded-md bg-sky-800 min-h-[48px] max-md:px-5 hover:bg-sky-700"
    >
      Get To Know Me
    </button>
  </form>
);
}

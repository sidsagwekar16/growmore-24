import * as React from "react";
import { QuickLinkProps } from "../types/types";

const quickLinks: QuickLinkProps[] = [
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Businesses & Brands", href: "/businesses" },
  { label: "Contact", href: "/contact" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col px-32 mt-1.5 w-full bg-white border-t border-solid border-t-zinc-400 h-[381px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-44 justify-between items-start py-12 w-full max-md:max-w-full">
        <div className="flex flex-col items-start text-base min-w-[240px] text-zinc-700 w-[403px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/2dcb31e5737f4026b1bb340f0bb21a44/dba1f3a30389a28ac3185873cd423293abdfeb5da6eb1166b094c874ebc51e0f?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&"
            alt="Company logo"
            className="object-contain max-w-full aspect-[3.01] w-[214px]"
          />
          <p className="self-stretch mt-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/2dcb31e5737f4026b1bb340f0bb21a44/affaa59020206f63119298778ed94dabd2c0712f124e3c15dbcefd57782e3b61?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&"
            alt="Social media links"
            className="object-contain mt-8 max-w-full aspect-[2.79] w-[195px]"
          />
        </div>

        <nav className="flex flex-col" aria-label="Quick links">
          <h2 className="text-xl font-extrabold leading-none text-zinc-800">
            Quick links
          </h2>
          <ul className="flex flex-col mt-6 text-base text-zinc-700">
            {quickLinks.map((link, index) => (
              <li key={index} className={index > 0 ? "mt-3" : ""}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col min-w-[240px] w-[373px]">
          <h2 className="text-xl font-extrabold leading-none text-zinc-800">
            Get Newsletters
          </h2>
          <form className="flex flex-col mt-6 w-full text-base max-w-[373px]">
            <p className="text-zinc-700">Get daily updates by subscribing</p>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="flex-1 shrink gap-2 self-stretch p-3 mt-3 w-full border border-solid border-zinc-800 min-h-[48px] text-zinc-400"
              placeholder="Your email address"
              aria-label="Your email address"
            />
            <button
              type="submit"
              className="gap-2 self-start px-6 py-4 mt-6 text-sm text-center text-white bg-slate-400 min-h-[48px] max-md:px-5"
            >
              Get To Know Me
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 justify-between items-center py-4 w-full text-sm border-t border-solid border-t-gray-400 text-zinc-700 max-md:max-w-full">
        <div className="self-stretch my-auto">
          Copyright statement lorem ipsum 2024
        </div>
        <div className="flex gap-10 items-start self-stretch my-auto text-right min-w-[240px]">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

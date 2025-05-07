import * as React from "react";
import { QuickLink } from "./QuickLink.tsx";
import { NewsletterInput } from "./NewsletterInput.tsx";
import { FooterLink } from "./FooterLink.tsx";

const quickLinks = [
  { text: "About Us", navLink: "/about" },
  { text: "Blogs", navLink: "/blog" },
  { text: "Contact", navLink: "/contact" }
];
const footerLinks = [{ text: "Privacy Policy", navLink: "/privacy-policy" }];

export const Footer: React.FC = () => {
  return (
    <div className="flex flex-col px-8 sm:px-24 w-full bg-white border-t border-solid border-t-zinc-400 overflow-hidden">
      <div className="flex flex-wrap justify-between items-start py-12 w-full mx-auto">
        <div className="flex flex-col items-start text-base min-w-[240px] text-zinc-700 w-[403px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/0014938fb5fd4152961b843a94ff3203/dba1f3a30389a28ac3185873cd423293abdfeb5da6eb1166b094c874ebc51e0f?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&"
            alt="Company logo"
            className="object-contain max-w-full w-[214px]"
          />
          <div className="self-stretch font-manrope sm:mt-4">
          At GrowMore, we are committed to driving innovation and empowering businesses across industries.
With a passion for technology and excellence, we deliver solutions that help you grow smarter and faster.
Join us on our journey to shape a better, more connected future.
          </div>
          <img
       
          />
        </div>

        <div className="flex flex-col sm:mt-1">
          <div className="text-xl font-manrope font-semibold leading-none text-zinc-800">
            Quick links
          </div>
          <div className="flex flex-col sm:mt-4 text-base text-zinc-700">
            {quickLinks.map((link, index) => (
              <QuickLink key={index} text={link.text} navLink={link.navLink} />
            ))}
          </div>
        </div>

        <div className="flex flex-col min-w-[240px] w-[373px]">
          <div className="text-xl mt-3 sm:mt-0 font-manrope font-semibold leading-none text-zinc-800">
            Get Newsletters
          </div>
          <NewsletterInput placeholder="Your email address" />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 sm:gap-10 justify-between items-center py-4 w-full text-sm border-t border-solid border-t-gray-400 text-zinc-700 mx-auto">
        <div className="self-stretch my-auto font-manrope ">
        © 2025 GrowMore Technologies Limited. All rights reserved.


        </div>
        <div className="flex gap-10 items-start self-stretch my-auto text-right min-w-[240px]">
          {footerLinks.map((link, index) => (
            <FooterLink key={index} text={link.text} navLink={link.navLink} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

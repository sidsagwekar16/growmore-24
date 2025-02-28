import * as React from "react";
import { QuickLink } from "./QuickLink.tsx";
import { NewsletterInput } from "./NewsletterInput.tsx";
import { FooterLink } from "./FooterLink.tsx";

const quickLinks = ["About Us", "Blogs", "Contact"];
const footerLinks = ["Privacy Policy"];

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
          <div className="self-stretch sm:mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/0014938fb5fd4152961b843a94ff3203/cef2c1741af94e24f147ccaebe8b08310cbf48ccee9608042df27210888d5ee1?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&"
            alt="Social media links"
            className="object-contain my-2 sm:mt-4 max-w-full aspect-[2.79] w-[195px]"
          />
        </div>

        <div className="flex flex-col sm:mt-1">
          <div className="text-xl font-extrabold leading-none text-zinc-800">
            Quick links
          </div>
          <div className="flex flex-col sm:mt-4 text-base text-zinc-700">
            {quickLinks.map((link, index) => (
              <QuickLink key={index} text={link} />
            ))}
          </div>
        </div>

        <div className="flex flex-col min-w-[240px] w-[373px]">
          <div className="text-xl mt-3 sm:mt-0 font-extrabold leading-none text-zinc-800">
            Get Newsletters
          </div>
          <NewsletterInput placeholder="Your email address" />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 sm:gap-10 justify-between items-center py-4 w-full text-sm border-t border-solid border-t-gray-400 text-zinc-700 mx-auto">
        <div className="self-stretch my-auto">
          All rights reserved @Growmoreweb
        </div>
        <div className="flex gap-10 items-start self-stretch my-auto text-right min-w-[240px]">
          {footerLinks.map((link, index) => (
            <FooterLink text={link}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

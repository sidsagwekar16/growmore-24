import * as React from "react";
import { PartnerLogoProps } from "../types/types";

const partnerLogos: PartnerLogoProps[] = Array(10).fill({
  src: "https://cdn.builder.io/api/v1/image/assets/2dcb31e5737f4026b1bb340f0bb21a44/998889ad56e68a6903a436c4461117a3a74997d246d8344238c85542850ca191?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&",
  alt: "Partner company logo",
});

export const PartnerSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-6 sm:px-12 lg:px-20 py-16 bg-white">

      {/* Desktop & Tablet Grid Layout */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-5 gap-x-16 gap-y-10 w-full">
        {partnerLogos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-6 border h-[30vh] border-gray-300 rounded-lg shadow-sm"
          >
            <img
              loading="lazy"
              src={logo.src}
              alt={logo.alt}
              className="object-contain w-40"
            />
          </div>
        ))}
      </div>

      {/* Mobile Scrollable Row */}
      <div className="sm:hidden flex gap-6 overflow-x-auto w-full px-4 no-scrollbar">
        {partnerLogos.map((logo, index) => (
          <div key={index} className="min-w-[80%] border h-[35vh] rounded-lg sm:min-w-0 flex justify-center">
            <img
              loading="lazy"
              src={logo.src}
              alt={logo.alt}
              className="object-contain w-40"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;

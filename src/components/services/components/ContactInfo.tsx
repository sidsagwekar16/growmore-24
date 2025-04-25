import * as React from "react";
import { ContactInfoProps } from "../types/types";

const contactDetails: ContactInfoProps[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/2dcb31e5737f4026b1bb340f0bb21a44/47d2fd063298bef434630e1143042dc246cefde1d8524c73a87b07d22b79e49b?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&",
    label: "Call anytime",
    value: "+91 556663737",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/2dcb31e5737f4026b1bb340f0bb21a44/edfec71083e5a607a415b085d0e536437dd4cf946e5d98f5fa6e75448c057a73?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&",
    label: "Send email",
    value: "xyz@gmail.com",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/2dcb31e5737f4026b1bb340f0bb21a44/49dfc38a863fb5def1dec8aeebacf358ed61788a003aab9049fd177738bd495e?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&",
    label: "Dolor sit ame",
    value: "Lorem ipsum",
  },
];

export const ContactInfo: React.FC = () => {
  return (
    <>
      {contactDetails.map((contact, index) => (
        <div key={index} className="flex gap-5 items-start">
          <img
            loading="lazy"
            src={contact.icon}
            alt={`${contact.label} icon`}
            className="object-contain shrink-0 aspect-square w-[30px]"
          />
          <div className="flex flex-col">
            <div className="self-start text-xs font-semibold leading-loose text-zinc-400">
              {contact.label}
            </div>
            <div className="mt-1.5 text-sm font-bold leading-none text-stone-900">
              {contact.value}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

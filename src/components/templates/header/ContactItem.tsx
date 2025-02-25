import * as React from "react";
import { ContactItemProps } from "./types";

export const ContactItem: React.FC<ContactItemProps> = ({
  icon,
  label,
  value,
  href,
}) => {
  const Content = () => (
    <div className="flex flex-row gap-4">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 aspect-square w-[30px]"
      />
      <div className="flex flex-col mr-5">
        <div className="self-start text-md font-semibold leading-loose text-zinc-400">
          {label}
        </div>
        <div className="mt-1.5 py-1 text-md font-bold leading-none text-stone-900">
          {value}
        </div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="flex flex-row sm:gap-5">
      <Content />
    </a>
  ) : (
    <Content />
  );
};

export default ContactItem;
import * as React from "react";
import { IconTextBlockProps } from "./types";

export const IconTextBlock: React.FC<IconTextBlockProps> = ({
  iconSrc,
  title,
  alt,
}) => {
  return (
    <div className="flex gap-5 items-start pb-8 min-w-[240px] w-[270px]">
      <img
        loading="lazy"
        src={iconSrc}
        alt={alt}
        className="object-contain shrink-0 w-16 aspect-square"
      />
      <div className="text-xl font-semibold leading-7 text-stone-900">
        {title}
      </div>
    </div>
  );
};

export default IconTextBlock;

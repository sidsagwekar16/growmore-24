import * as React from "react";
import { SocialIconProps } from "./types";

export const SocialIcon: React.FC<SocialIconProps> = ({ src, alt, href }) => {
  const image = (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain shrink-0 w-10 cursor-pointer pointer-events-auto mx-3 aspect-square"
    />
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {image}
    </a>
  ) : (
    image
  );
};

export default SocialIcon;

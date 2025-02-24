import * as React from "react";
import { SocialIconProps } from "./types";

export const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="object-contain shrink-0 w-10 cursor-pointer pointer-events-auto mx-3 aspect-square"
  />
);

export default SocialIcon;
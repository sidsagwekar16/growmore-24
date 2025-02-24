import * as React from "react";
import { SocialIconProps } from "../types/types";

const socialIcons: SocialIconProps[] = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/2dcb31e5737f4026b1bb340f0bb21a44/d6adb4bf62fb1f67da101ccf03aa78cb9eef8fa3d71873f4ec47f736d7015f8f?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&",
    alt: "Social media icon 1",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/2dcb31e5737f4026b1bb340f0bb21a44/d068316e1923b57e4f0b0a682cf03ee75ac203389366eecc83814f93d1044107?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&",
    alt: "Social media icon 2",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/2dcb31e5737f4026b1bb340f0bb21a44/dd14c0075e04e53ba206341dfb6f93b7d1bc3ed1ad6dd79e95d3d0d38607d368?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&",
    alt: "Social media icon 3",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/2dcb31e5737f4026b1bb340f0bb21a44/43ff6651ab3b7048dc878aba62aa5f584f308307641217d2acd691cc27eefc72?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&",
    alt: "Social media icon 4",
  },
];

export const SocialIcons: React.FC = () => {
  return (
    <div className="flex gap-2.5 self-start mt-1.5">
      {socialIcons.map((icon, index) => (
        <img
          key={index}
          loading="lazy"
          src={icon.src}
          alt={icon.alt}
          className="object-contain shrink-0 w-10 aspect-square"
        />
      ))}
    </div>
  );
};

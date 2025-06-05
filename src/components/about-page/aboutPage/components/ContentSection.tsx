import * as React from "react";
import { Link } from "react-router-dom";
import { ContentSectionProps } from "../types/types";

export const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  heading,
  description,
  buttonText,
  imageSrc,
  buttonHref,
  buttonLink,
  isReversed = false,
}) => {
  const content = (
    <div className="flex flex-col sm:w-[50vw] max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="text-2xl text-red-600 font-covered max-md:max-w-full">
          {title}
        </div>
        <div className="text-5xl font-manrope font-semibold leading-[58px] text-zinc-800 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          {heading}
        </div>
      </div>
      <div className="mt-8 text-base leading-7 font-manrope text-zinc-500 max-md:max-w-full text-justify">
        {description}
      </div>
      <div className="flex mt-8 max-w-full bg-sky-800 min-h-[4px] w-[635px]" />

      {buttonLink ? (
        <Link
          to={buttonLink}
          className="overflow-hidden font-manrope font-semibold px-9 py-4 mt-8 max-w-full text-lg leading-loose text-white bg-sky-800 rounded-xl w-[201px] max-md:px-5"
          aria-label={buttonText}
        >
          {buttonText}
        </Link>
      ) : buttonHref ? (
        <a
          href={buttonHref}
          target="_blank"
          rel="noopener noreferrer"
          className="overflow-hidden font-manrope font-semibold px-9 py-4 mt-8 max-w-full text-lg leading-loose text-white bg-sky-800 rounded-xl w-[201px] max-md:px-5"
          aria-label={buttonText}
        >
          {buttonText}
        </a>
      ) : null}
    </div>
  );

  const image = (
    <div className="flex flex-col px-4 pb-24 min-w-[240px] w-[600px] max-md:pr-5 max-md:max-w-full">
      <img
        loading="lazy"
        src={imageSrc}
        alt="Section illustration"
        className="object-cover w-full aspect-square max-md:max-w-full rounded-full"
      />
    </div>
  );

  return (
    <div className="flex flex-col sm:flex-row gap-8 justify-center items-start px-20 pt-32 pb-14 bg-slate-400 bg-opacity-20 min-h-[819px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      {isReversed ? (
        <>
          {content}
          {image}
        </>
      ) : (
        <>
          {image}
          {content}
        </>
      )}
    </div>
  );
};

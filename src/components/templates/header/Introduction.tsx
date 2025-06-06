import * as React from "react";
import { IconTextBlock } from "./IconTextBlock.tsx";
import { IntroductionProps } from "./types";
import introImage from '../header/elements.png'
import { useNavigate } from "react-router-dom";

const iconBlocks = [
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/0014938fb5fd4152961b843a94ff3203/86a86134c3dedf62994ce79fcd10092094c2a24e0b22e33e0f0f11ef9dc934d3?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&",
    title: "Lorem Ipsum",
    alt: "Feature icon 1",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/0014938fb5fd4152961b843a94ff3203/6756b8e51790e55d88704495f54aa54460a649a6c7d96ba2a772c948a9d78109?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&",
    title: "Lorem Ipsum",
    alt: "Feature icon 2",
  },
];

export const Introduction: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-5 sm:px-10 md:px-16 lg:px-32 py-16 sm:py-24 lg:py-32">
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          loading="lazy"
          src={introImage}
          alt="Intro image"
          className="object-cover w-full max-w-[600px] aspect-square rounded-xl"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-center lg:items-start xl-lg:px-[20%] sm:items-start lg:text-left w-[90%]">
        <div className="text-2xl text-red-600 w-full font-covered">Our Introductions</div>
        <h2 className="text-3xl font-manrope font-semibold sm:text-4xl font-bold leading-9 text-zinc-800">
          Grounded in Heritage <br />
          Cultivating for <br />
          Tomorrow
        </h2>

        <p className="mt-6 font-manrope text-justify text-base leading-7 text-zinc-500">
          Growmore Technologies Limited is a Zambian company specializing in
          agricultural machinery, with branches across Zambia and Malawi. As the
          sole distributors of Farmtrac tractors, we also offer agricultural
          motorbikes, implements, irrigation systems, and greenhouse solutions.
          Our team is committed to supporting farmers through training,
          demonstrations, and exceptional after-sales services. We focus on
          bringing innovative technologies to the agriculture sector, driving
          sustainable growth and mechanization for a prosperous future.
        </p>

        <div className="mt-6 bg-sky-800 h-1 w-full max-w-[635px]" />

        <div className="flex flex-wrap justify-center font-manrope font-semibold lg:justify-start gap-3.5 items-start mt-6">
          {iconBlocks.map((block, index) => (
            <IconTextBlock
              key={index}
              iconSrc={block.iconSrc}
              title={block.title}
              alt={block.alt}
            />
          ))}
        </div>

        <button
          className="px-9 py-4 font-manrope  mt-6 text-md font-semibold text-white bg-sky-800 rounded-xl max-md:px-5"
          tabIndex={0}
          onClick={() => navigate('/categories')}
        >
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Introduction;

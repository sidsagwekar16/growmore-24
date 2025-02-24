import * as React from "react";
import { ContentSection } from "./components/ContentSection.tsx";
import { PartnerSection } from "./components/PartnerSection.tsx";


export const AboutPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col pb-24 bg-white max-md:pb-24">
    

    <div className="flex justify-center px-16 pt-32 pb-28 -mt-8 w-full text-6xl font-extrabold leading-none text-white bg-gray-900 text-center max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:max-w-full max-md:text-4xl">

        ABOUT US
      </div>

      <section className="box-border flex relative flex-col shrink-0">
        <h1 className="self-center mt-24 text-5xl font-bold leading-tight text-zinc-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-sm:text-center">
          Grounded in Heritage
        </h1>
        <div className="flex shrink-0 self-center mt-4 h-1 bg-sky-800 w-[191px]" />
        <p className="self-center mt-6 text-base leading-7 mb-[60px] text-center max-w-[70%] text-zinc-500 max-md:max-w-full max-sm:w-4/5">
          Growmore Technologies Limited is a Zambian company specializing in
          agricultural machinery, with branches across Zambia and Malawi. As the
          sole distributors of Farmtrac tractors, we also offer agricultural
          motorbikes, implements, irrigation systems, and greenhouse solutions.
          Our team is committed to supporting farmers through training,
          demonstrations, and exceptional after-sales services. We focus on
          bringing innovative technologies to the agriculture sector, driving
          sustainable growth and mechanization for a prosperous future.
        </p>
      </section>

      <ContentSection
        title="Our Vision"
        heading="Heading : Text about our vision comes here"
        description="Growmore Technologies Limited is a Zambian company specializing in agricultural machinery, with branches across Zambia and Malawi. As the sole distributors of Farmtrac tractors, we also offer agricultural motorbikes, implements, irrigation systems, and greenhouse solutions. Our team is committed to supporting farmers through training, demonstrations, and exceptional after-sales services. We focus on bringing innovative technologies to the agriculture sector, driving sustainable growth and mechanization for a prosperous future."
        buttonText="Discover More"
        imageSrc="https://cdn.builder.io/api/v1/image/assets/2dcb31e5737f4026b1bb340f0bb21a44/62df320f6d949eaac5f249fda322a84a5fc541b3b439c773544ffc7b9043b26c?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&"
      />

      <ContentSection
        title="Our Mission"
        heading="Heading : Text about our Mission comes here"
        description="Growmore Technologies Limited is a Zambian company specializing in agricultural machinery, with branches across Zambia and Malawi. As the sole distributors of Farmtrac tractors, we also offer agricultural motorbikes, implements, irrigation systems, and greenhouse solutions. Our team is committed to supporting farmers through training, demonstrations, and exceptional after-sales services. We focus on bringing innovative technologies to the agriculture sector, driving sustainable growth and mechanization for a prosperous future."
        buttonText="View Products"
        imageSrc="https://cdn.builder.io/api/v1/image/assets/2dcb31e5737f4026b1bb340f0bb21a44/62df320f6d949eaac5f249fda322a84a5fc541b3b439c773544ffc7b9043b26c?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&"
        isReversed={true}
      />

      <section className="box-border flex relative flex-col shrink-0">
        <div className="flex flex-col items-start mt-24 px-8 sm:ml-20 sm:px-12 max-w-full w-[223px] max-md:mt-10 max-md:ml-2.5">
          <h2 className="text-2xl text-red-600">Our Trusted</h2>
          <div className="text-5xl font-bold leading-tight text-zinc-800 max-md:text-4xl">
            Partners
          </div>
          <div className="flex shrink-0 self-stretch h-1 bg-sky-800" />
        </div>
        
        <div className="flex w-[95vw] mx-auto">
          <PartnerSection />
        </div>
      </section>


    </div>
  );
};

import * as React from "react";
import { ContentSection } from "./components/ContentSection.tsx";
import { PartnerSection } from "./components/PartnerSection.tsx";


export const AboutPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col pb-24 bg-white max-md:pb-24">
    

    <div
      className="relative flex justify-center px-16 pt-32 pb-28 -mt-8 w-full text-6xl font-extrabold leading-none text-white text-center max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:max-w-full max-md:text-4xl"
        style={{
          backgroundImage: `url("https://media.istockphoto.com/id/543212762/photo/tractor-cultivating-field-at-spring.jpg?s=612x612&w=0&k=20&c=uJDy7MECNZeHDKfUrLNeQuT7A1IqQe89lmLREhjIJYU=")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
      >   
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="relative z-10">
          ABOUT US
        </div>
      </div>

      <section className="box-borde my-24 flex relative flex-col shrink-0">
        <h1 className="self-center  text-5xl font-bold leading-tight text-zinc-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-sm:text-center">
          Grounded in Heritage
        </h1>
        <div className="flex  shrink-0 self-center mt-4 h-1 bg-sky-800 w-[191px]" />
        <p className="self-center  mt-6 text-base leading-7 text-center max-w-[70%] text-zinc-500 max-md:max-w-full max-sm:w-4/5">
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
        heading="Transforming Agriculture, Empowering Communities"
        description="At Growmore Technologies Limited, we envision a future where modern technology and sustainable practices revolutionize the agricultural landscape in Africa. Our goal is to equip farmers with state-of-the-art machinery and knowledge to enhance productivity, efficiency, and profitability.Through innovation and dedication, we strive to bridge the gap between tradition and technology, ensuring that agriculture remains a thriving and resilient sector. By empowering farmers with cutting-edge solution"
        buttonText="Discover More"
        imageSrc="https://agfundernews.com/wp-content/uploads/2022/08/281832544_4872557739523316_4916680536175142455_n.jpeg"
      />

      <ContentSection
        title="Our Mission"
        heading="Empowering Agriculture, Enhancing Lives"
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

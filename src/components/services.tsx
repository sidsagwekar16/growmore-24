import * as React from "react";

interface SectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt
}) => (
  <div className="flex flex-wrap flex-row justify-around px-10 items-start pt-11 mt-11 w-full h-auto min-h-[564px] max-md:flex-col max-md:px-5 max-md:mt-10">
    <div className="flex flex-col mt-[13vh] min-w-[240px] w-[681px] max-md:w-full">
      <div className="flex flex-col w-full">
        <div className="text-2xl text-red-600">
          {title}
        </div>
        <h2 className="self-start text-5xl font-bold leading-tight text-zinc-800 max-md:text-4xl">
          {subtitle}
        </h2>
      </div>
      <div className="mt-8 text-base leading-7 text-zinc-500">
        {description}
      </div>
    </div>
    <div className="flex flex-col px-4 pb-24 min-w-[240px] w-[600px] max-md:pr-5 max-md:w-full">
      <img
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        className="object-contain w-full aspect-square"
      />
    </div>
  </div>
);

const ServicesPage: React.FC = () => {
  const sections = [
    {
      title: "Service",
      subtitle: "Service and Parts",
      description: `In an endeavor to ensure that our products are supported in the field, all spares and parts are made available at our various branches countrywide. This effort is supported through a dedicated team to service the parts needs of its customers.\nA team of trained professionals in our branches ensure that the our clients are given maximum service attention by providing a hassle-free experience. Feel free to call our head office for immediate technical assistance. For parts requirements of our various products please contact`,
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/0014938fb5fd4152961b843a94ff3203/619f994ff43790837c8c660b8f61cfe3fd9ad605dbd5b1a9f8bd28967bbcde6c?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&",
      imageAlt: "Service and Parts Illustration"
    },
    {
      title: "Contact",
      subtitle: "Contact",
      description: (
        
        <ul>
          Plot No. 12114 Mumbwa Rd, Area 10101, Zambia
       
         
  
          <br />
          (+260) (979) 121827 
          <br />
          info@growmoreweb.com
        </ul>
      ),
      
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/0014938fb5fd4152961b843a94ff3203/44502eae287bce9a647c21e7984ea7cb9de9a14aed579d00812ce147e86ca8cd?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&",
      imageAlt: "Contact Information Illustration"
    }
  ];

  return (
    <main className="flex flex-col w-full max-md:w-full">
      <div className="flex overflow-hidden flex-col w-full bg-white">
        <div className="flex flex-col w-full">
          <div className="flex flex-col items-center w-full">
            <h1 className="text-6xl font-extrabold text-center pt-28 pb-28 text-white bg-gray-900 leading-[58px] w-full max-md:text-4xl max-md:leading-10">
              Services and parts
            </h1>
          </div>
        </div>
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
    </main>
  );
};

export default ServicesPage;

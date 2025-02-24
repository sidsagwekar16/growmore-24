import * as React from "react";

interface ServiceCardProps {
  imageUrl: string;
  imageAlt: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageUrl, imageAlt }) => (
  <div className="flex flex-col w-full bg-transparent rounded-lg overflow-hidden">
    <img
      loading="lazy"
      src={imageUrl}
      alt={imageAlt}
      className="object-cover w-full h-auto rounded-lg"
    />
  </div>
);

const ServicesSection: React.FC = () => {
  const services = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/0014938fb5fd4152961b843a94ff3203/1f9d65dcdd110aa83dcdb0033f293c58289b1ab30e347d369ad403802fd78f58?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&",
      imageAlt: "Service offering illustration 1",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/0014938fb5fd4152961b843a94ff3203/80005f97d2766419e22f4e842e3b0fb1cb8adc735dbe1f49282c537daacbef7e?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&",
      imageAlt: "Service offering illustration 2",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/0014938fb5fd4152961b843a94ff3203/8be7ad2e441c7e1594c0a939f795ac5bfd5da9cbac7099fc1d51036c6f17d5f4?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&",
      imageAlt: "Service offering illustration 3",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/0014938fb5fd4152961b843a94ff3203/92f08470ae366af402aa496a6555330ed92d21dfafdd79a41bbddeaf28066583?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&",
      imageAlt: "Service offering illustration 4",
    },
  ];

  return (
    <section
      className="relative flex flex-col items-center py-16 px-6"
      role="region"
      aria-label="Our Services Section"
    >
      {/* Background Div Covering Half of the Section */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-400 bg-opacity-20 z-[-1]" />

      <div className="text-center mb-12">
        <h2 className="text-2xl text-red-600">Our Services</h2>
        <h3 className="mt-4 text-4xl md:text-5xl font-extrabold text-zinc-800">
          What We Offer
        </h3>
      </div>
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl lg:flex-nowrap">
        {services.map((service, index) => (
          <ServiceCard key={index} imageUrl={service.imageUrl} imageAlt={service.imageAlt} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

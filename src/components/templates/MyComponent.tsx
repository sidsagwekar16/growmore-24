import * as React from 'react';
import { useState, useEffect } from 'react';

interface Slide {
  id: number;
  imageUrl: string;
  altText: string;
  heading: string,
  description : string,
  text: string
}

const SLIDES: Slide[] = [
 
  {
    id: 1,
    imageUrl: "https://honeydew-fox-305576.hostingersite.com/growmore/images/image2.jpg",
    altText: 'Background Image 2',
    heading: "Gear Up for a Smarter Farm",
    description: "Durable. Reliable. Essential.",
    text: "Our farming accessories are built to withstand tough conditions, ensuring long-lasting performance with every use."
  },
  {
    id: 2,
    imageUrl: "https://honeydew-fox-305576.hostingersite.com/growmore/images/image3.jpg",
    altText: 'Background Image 3',
    heading: "Accessories Built for Every Field",
    description: "From Soil to Success",
    text: "Whether it's irrigation, hand tools, or protective gear — find everything you need to boost productivity and nurture your crops."
  },
];


const MyComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(goToNextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center w-[100vw] overflow-x-hidden min-h-[810px] overflow-hidden py-44 max-md:px-5 max-md:py-24">
     <> <img
    loading="lazy"
    src={SLIDES[currentIndex].imageUrl}
    alt={SLIDES[currentIndex].altText}
    className="absolute inset-0 object-cover w-screen h-full z-0"
  />
  <div className="absolute inset-0 bg-black opacity-50 z-10" />
</>
      <div className="relative z-20 flex flex-col items-start max-w-full w-[1160px]">
        <div className="ml-7 font-manrope text-white uppercase max-md:ml-2.5">{SLIDES[currentIndex].heading}</div>
        <div className="flex flex-wrap justify-between w-full mt-12 max-md:mt-10">
          <div className="text-9xl text-amber-300 leading-[110px] max-md:text-4xl max-md:leading-10">
            <span className="text-white font-covered">{SLIDES[currentIndex].description}</span>
          </div>
        </div>
        <div className="hidden absolute right-10 top-1/2 transform -translate-y-1/2 sm:flex flex-col gap-3">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full bg-white ${currentIndex === index ? 'opacity-100 h-8 transition delay-150' : 'opacity-50'}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <div className="flex flex-col ml-0 mt-11 max-w-full w-[519px] max-md:mt-10 ">
          <div className="text-base font-manrope text-white text-opacity-70 leading-8 ">
            {SLIDES[currentIndex].text}
          </div>
          <div className="flex gap-5 items-center mt-3.5">
            <button onClick={goToPrevSlide} className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button onClick={goToNextSlide} className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;

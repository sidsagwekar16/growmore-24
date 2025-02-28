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
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/0014938fb5fd4152961b843a94ff3203/90ab530e859c6de6b5a1df5ee9a65d801d2055863836a3b2b225c057770ee6f7?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&',
    altText: 'Background Image 1',
    heading:"Heading 1",
    description:"Description 1",
    text:"Text 1"
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/seed/picsum/200/300',
    altText: 'Background Image 2',
    heading:"Heading 2",
    description:"Description 2",
    text:"Text 2"
  },
  {
    id: 3,
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/0014938fb5fd4152961b843a94ff3203/90ab530e859c6de6b5a1df5ee9a65d801d2055863836a3b2b225c057770ee6f7?apiKey=2dcb31e5737f4026b1bb340f0bb21a44&',
    altText: 'Background Image 3',
    heading:"Heading 3",
    description:"Description 3",
    text:"Text 3"
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
      <img
        loading="lazy"
        src={SLIDES[currentIndex].imageUrl}
        alt={SLIDES[currentIndex].altText}
        className="absolute inset-0 object-cover w-screen h-full"
      />
      <div className="relative flex flex-col items-start max-w-full w-[1160px]">
        <div className="ml-7 text-base font-semibold text-white uppercase max-md:ml-2.5">{SLIDES[currentIndex].heading}</div>
        <div className="flex flex-wrap justify-between w-full mt-12 max-md:mt-10">
          <div className="text-9xl text-amber-300 leading-[110px] max-md:text-4xl max-md:leading-10">
            <span className="text-white">{SLIDES[currentIndex].description}</span>
          </div>
        </div>
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full bg-white ${currentIndex === index ? 'opacity-100 h-8 transition delay-150' : 'opacity-50'}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <div className="flex flex-col mt-11 ml-7 max-w-full w-[519px] max-md:mt-10">
          <div className="text-base font-semibold text-white text-opacity-70 leading-8">
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

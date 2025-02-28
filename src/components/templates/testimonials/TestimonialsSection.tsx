"use client";
import * as React from "react";
import { useState } from "react";

export interface TestimonialsSectionProps {}

interface Testimonial {
  text: string;
  author: string;
  avatar: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = () => {
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      text: "Lorem ipsum dolor sit amet. Id laboriosam adipisci ab vitae quis ex mollitia harum.",
      author: "John Smith",
      avatar: "https://cdn.builder.io/api/v1/image/assets/0014938fb5fd4152961b843a94ff3203/1fdb8a6564745a8c43a21c54728a47efcb52abfca7bef3c23c5ef000f8a01f66?"
    },
    {
      text: "Est tempora quasi id molestiae commodi aut nihil nulla eum labore deleniti.",
      author: "Jane Doe",
      avatar: "https://cdn.builder.io/api/v1/image/assets/0014938fb5fd4152961b843a94ff3203/81f6736f00171d0b49131a7f79c84d371928c45d2c6eb40999c0a3f8f5e4040f?"
    }
  ];

  const handleTestimonialChange = (direction: "prev" | "next") => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTestimonialIndex((prev) =>
        direction === "next"
          ? (prev + 1) % testimonials.length
          : (prev - 1 + testimonials.length) % testimonials.length
      );
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="flex flex-col items-center w-screen px-4 sm:px-8 lg:px-20 py-16 md:py-24 lg:py-32 bg-slate-400 bg-opacity-20">
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row items-center justify-between relative">
        {/* Heading Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[40%]">
          <h2 className="text-2xl font-semibold text-sky-800">Our Testimonials</h2>
          <h3 className="mr-4 mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-zinc-800">
            What They're Talking About
          </h3>
          <p className="mr-4 mt-4 text-base sm:text-lg text-neutral-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum justo eget nisi fermentum.
          </p>
        </div>

        {/* Navigation Buttons - Now Fixed and Centered */}
        <div className="hidden lg:flex flex-col items-center gap-4 mr-5 w-[60px]">
          <button
            className="flex justify-center items-center bg-white h-12 w-12 rounded-full hover:bg-gray-100 transition focus:ring-2 focus:ring-sky-800 shadow-md rotate-90"
            onClick={() => handleTestimonialChange("prev")}
            aria-label="Previous testimonial"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className="flex justify-center items-center bg-white h-12 w-12 rounded-full hover:bg-gray-100 transition focus:ring-2 focus:ring-sky-800 shadow rotate-90"
            onClick={() => handleTestimonialChange("next")}
            aria-label="Next testimonial"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Testimonial Section */}
        <div className="w-full lg:w-[55%] flex justify-center">
          <article
            className="flex flex-col justify-center p-6 sm:p-10 bg-white rounded-3xl shadow-lg transition-all duration-300 ease-in-out min-h-[250px]"
            style={{
              transform: isTransitioning ? "translateX(-20px)" : "translateX(0)",
              opacity: isTransitioning ? 0 : 1,
            }}
            aria-live="polite"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="text-center sm:text-left flex-1">
                <p className="text-base sm:text-lg text-neutral-600">
                  {testimonials[currentTestimonialIndex].text}
                </p>
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mt-6">
                  <p className="text-lg sm:text-2xl font-extrabold text-stone-900">
                    {testimonials[currentTestimonialIndex].author}
                  </p>
                </div>
              </div>
              <img src={testimonials[currentTestimonialIndex].avatar} alt={testimonials[currentTestimonialIndex].author} className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

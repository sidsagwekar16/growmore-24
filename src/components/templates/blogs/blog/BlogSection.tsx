import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BlogCard } from "./components/BlogCard.tsx";
import { blogPosts } from "./data/blogPosts.ts";

export function BlogSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280, // Large Tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col p-32 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col items-left max-w-full text-left">
        <div className="text-2xl font-medium text-sky-800">From the Blog</div>
        <div className="mt-2 text-5xl font-extrabold leading-tight text-stone-900 max-md:text-4xl">
          News & Articles
        </div>
      </div>
      <div className="mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <Slider {...settings} className="w-full">
          {blogPosts.map((post) => (
            <div key={post.id} className="px-2">
              <BlogCard post={post} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BlogSection;
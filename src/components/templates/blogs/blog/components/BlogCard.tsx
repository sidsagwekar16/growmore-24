import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BlogPost } from "../types";

interface BlogSliderProps {
  posts: BlogPost[];
}

export function BlogSlider({ posts }: BlogSliderProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
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
    <Slider {...settings} className="w-full">
      {posts.map((post, index) => (
        <div key={index} className="px-2">
          <BlogCard post={post} />
        </div>
      ))}
    </Slider>
  );
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-col font-manrope bg-white overflow-hidden sm:w-full">
      {/* Blog Image */}
      <img
        loading="lazy"
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-64 lg:h-72 object-cover rounded-2xl"
      />

      {/* Blog Content */}
      <div className="py-6 px-0">
        <p className="text-sm text-black">{post.category}</p>
        <h3 className="mt-2 text-lg md:text-xl font-semibold text-gray-900">{post.title}</h3>
        <p className="mt-2 text-sm md:text-base text-gray-700">{post.description}</p>

        {/* Blog Meta Information */}
        <div className="flex items-center gap-2 text-gray-600 text-xs md:text-sm mt-4">
          <span>{post.date}</span>
          <span className="text-lg">•</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogSlider;
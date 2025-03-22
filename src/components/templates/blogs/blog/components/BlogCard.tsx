import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function BlogSlider() {
  const [loading, setLoading] = React.useState(true);


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
    <div>
      {loading ? (
        <p className="text-center text-gray-500">Loading blogs...</p>
      ) : posts.length > 0 ? (
        <Slider {...settings} className="w-full">
          {posts.map((post, index) => (
            <div key={index} className="px-2">
              <BlogCard post={post} />
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-gray-500">No blogs available.</p>
      )}
    </div>
  );
}

export function BlogCard({ post }) {
  return (
    <div className="flex flex-col font-manrope bg-white overflow-hidden sm:w-full">
      <img
        loading="lazy"
        src={post.image}
        alt={post.title}
        className="w-full h-64 lg:h-72 object-cover rounded-2xl"
      />

      {/* Blog Content */}
      <div className="py-6 px-0">
        <p className="text-sm text-black">{post.id}</p>
        <h3 className="mt-2 text-lg md:text-xl font-semibold text-gray-900">{post.headline}</h3>
        <p className="mt-2 text-sm md:text-base text-gray-700 truncate">{ post.content}</p>

        {/* Blog Meta Information */}
        <div className="flex items-center gap-2 text-gray-600 text-xs md:text-sm mt-4">
          <span>{post.created_at}</span>
          <span className="text-lg">•</span>
          <span>{post.created_by}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogSlider;

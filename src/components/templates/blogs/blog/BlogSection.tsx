import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BlogCard } from "./components/BlogCard.tsx";

export function BlogSection() {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    fetch("https://growmore-hkbmhna2bxchd4bw.eastasia-01.azurewebsites.net/admin/blogs")
      .then((response) => response.json())
      .then((data) => {
        if (data.blogs) {
          // Convert object to array and format fields
          const formattedBlogs = Object.keys(data.blogs).map((key) => ({
            id: key,
            title: data.blogs[key].title || "Untitled",
            headline: data.blogs[key].headline || "No headline available.",
            content: data.blogs[key].content || "Untitled",
            created_by: data.blogs[key].created_by || "Unknown",
            created_at: new Date(data.blogs[key].created_at).toLocaleDateString(),
            category: data.blogs[key].tags?.join(", ") || "Uncategorized",
            description: data.blogs[key].content || "No description available.",
            image: data.blogs[key].image_url || "https://via.placeholder.com/400",
          }));
          setBlogs(formattedBlogs);
        }
      })
      
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

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
    <div className="flex flex-col py-32 px-[8%] w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col items-left max-w-full text-left">
        <div className="text-2xl font-covered text-sky-800">From the Blog</div>
        <div className="mt-2 text-5xl font-manrope font-semibold leading-tight text-stone-900 max-md:text-4xl">
          News & Articles
        </div>
      </div>
      <div className="mt-16 w-full max-md:mt-10 max-md:max-w-full">
        {blogs.length > 0 ? (
          <Slider {...settings} className="w-full">
            {blogs.map((post) => (
              <div key={post.id} className="px-2">
                <BlogCard post={post} />
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-center text-gray-500">Loading blogs...</p>
        )}
      </div>
    </div>
  );
}

export default BlogSection;

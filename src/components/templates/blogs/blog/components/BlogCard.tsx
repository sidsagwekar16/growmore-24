import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BlogPost } from "../types";

export function BlogSlider() {
  const [posts, setPosts] = React.useState<BlogPost[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://growmore-hkbmhna2bxchd4bw.eastasia-01.azurewebsites.net/admin/blogs")
      .then((response) => response.json())
      .then((data) => {
        if (data.blogs) {
          // Convert object to array and adjust fields
          const blogArray = Object.keys(data.blogs).map((key) => ({
            id: key,
            title: data.blogs[key].title || key, // Fallback to key if title is missing
            headline: data.blogs[key].headline || "",
            content: data.blogs[key].content,
            created_by: data.blogs[key].created_by,
            created_at: new Date(data.blogs[key].created_at).toLocaleDateString(),
            imageUrl: data.blogs[key].image_url || "https://via.placeholder.com/400", // Default image
            tags: data.blogs[key].tags || [],
          }));
          setPosts(blogArray);
        }
      })
      .catch((error) => console.error("Error fetching blogs:", error))
      .finally(() => setLoading(false));
  }, []);

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
        <p className="text-sm text-black">{post.tags?.join(", ") || "Uncategorized"}</p>
        <h3 className="mt-2 text-lg md:text-xl font-semibold text-gray-900">{post.title}</h3>
        <p className="mt-2 text-sm md:text-base text-gray-700">{post.headline || post.content}</p>

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

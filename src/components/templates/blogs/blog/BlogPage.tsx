import React, { useEffect, useState } from "react";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://growmore-hkbmhna2bxchd4bw.eastasia-01.azurewebsites.net/admin/blogs")
      .then((response) => response.json())
      .then((data) => {
        if (data.blogs) {
          // Convert object to array and format fields
          const formattedBlogs = Object.keys(data.blogs).map((key) => ({
            id: key,
            title: data.blogs[key].title || "Untitled",
            category: data.blogs[key].tags?.join(", ") || "Uncategorized",
            description: data.blogs[key].content || "No description available.",
            image: data.blogs[key].image_url || "https://via.placeholder.com/400",
          }));
          setBlogPosts(formattedBlogs);
        }
      })
      .catch((error) => console.error("Error fetching blogs:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-center items-center py-24 w-full bg-gray-900">
        <h1 className="text-3xl sm:text-6xl font-manrope font-semibold text-white text-center">Blogs</h1>
      </header>

      {/* Blog List */}
      <div className="max-w-7xl px-5 mx-auto md:px-10 lg:px-0 my-16">
        {loading ? (
          <p className="text-center text-gray-500">Loading blogs...</p>
        ) : blogPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="rounded-xl overflow-hidden bg-white">
                <img src={post.image} alt={post.title} className="w-full object-cover h-[30vh] sm:h-[40vh]" />
                <div className="p-6">
                  <p className="text-sm uppercase font-manrope text-gray-500 mb-2">{post.category}</p>
                  <h2 className="text-2xl font-manrope font-semibold mb-3">{post.title}</h2>
                  <p className="text-gray-700 font-manrope">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No blogs available.</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;

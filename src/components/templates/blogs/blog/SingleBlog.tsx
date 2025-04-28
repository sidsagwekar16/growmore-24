import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://growmore-backend.vercel.app/admin/blogs")
      .then((response) => response.json())
      .then((data) => {
        if (data.blogs && data.blogs[id]) {
          setPost({
            ...data.blogs[id],
            id: id,
            created_at: new Date(data.blogs[id].created_at).toLocaleDateString(),
          });
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl text-gray-600">
        Loading...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl text-gray-600">
        Post not found
      </div>
    );
  }

  return (
    <div className="w-full py-6 md:py-10 bg-white flex justify-center">
      <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
        <img
          src={post.image_url || "https://via.placeholder.com/600x400"}
          alt={post.title}
          className="w-full rounded-lg mb-6 object-cover h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]"
        />

        <div className="flex flex-col items-center text-center">
          <p className="text-gray-600 font-medium">{post.created_by || "Admin"}</p>
          <p className="text-gray-400 text-sm">{post.created_at}</p>
        </div>

        <h1 className="text-2xl sm:text-3xl text-center mt-4 mb-6 font-semibold">
          {post.title}
        </h1>

        <p className="text-gray-700 leading-7 text-justify text-sm sm:text-base">
          {post.content}
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;

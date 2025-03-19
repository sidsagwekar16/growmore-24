import React from 'react';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
  const { id } = useParams();

  const blogPosts = [
    {
      id: 1,
      title: 'Control Your Own Level of Design',
      author: 'Duncan Founder',
      date: 'May 12, 2024',
      category: 'Design',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJuhs3xtJ0V94n2PYF04yJ7JqFJ3Co7odWQ&s',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque 
      ipsum quam, non elementum leo pharetra ac. Aenean euismod malesuada.
      
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt risus non 
      felis blandit, et bibendum lorem consequat. Suspendisse malesuada lorem 
      eu nunc bibendum, in facilisis erat dictum. Nam consequat consequat ligula, 
      eget posuere ipsum aliquet nec. Phasellus tristique lorem id orci 
      condimentum, et tincidunt turpis elementum.`
    }
  ];

  const post = blogPosts.find((post) => post.id === parseInt(id));

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
        {/* Blog Image */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-lg mb-6 object-cover h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]"
        />

        {/* Author and Date */}
        <div className="flex flex-col items-center text-center">
          <p className="text-gray-600 font-medium">{post.author}</p>
          <p className="text-gray-400 text-sm">{post.date} • {post.category}</p>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl text-center mt-4 mb-6 font-semibold">
          {post.title}
        </h1>

        {/* Content */}
        <p className="text-gray-700 leading-7 text-justify text-sm sm:text-base">
          {post.content}
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;

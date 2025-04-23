import React from "react";
import Button from "../Button";

const blogPosts = [
  {
    id: 1,
    author: "Julia Parker",
    category: "Good Health",
    title: "Good Health Habits Can Help Stop Germs",
    image:
      "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/06/1-1-360x225.jpg",
  },
  {
    id: 2,
    author: "HEALTH",
    category: "Health Tips",
    title: "Important Tips for Your Health and Better Living",
    image:
      "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/06/2-2-360x225.jpg",
  },
  {
    id: 3,
    author: "MEDICAL CARE",
    category: "Medical Advice",
    title: "Fusce Porttitor Dui Ultricies Placerat",
    image:
      "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/06/7-2-360x225.jpg",
  },
];

const LatestBlogs = () => {
  return (
    <div className="container mx-auto px-5 md:px-0 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Latest from Our Health Blog
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center">
          Stay informed with expert healthcare tips, wellness advice, and the
          latest updates on medical treatments. Learn how to book hassle-free
          doctor appointments, get preventive care insights, and manage your
          health effectively. Your well-being is our priority!
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-48">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-30"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-semibold text-blue-600">
                  {post.author}
                </span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">{post.category}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {post.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* More News Button */}
      <div className="text-center mt-12">
       <Button text='Read More' />
      </div>
    </div>
  );
};

export default LatestBlogs;

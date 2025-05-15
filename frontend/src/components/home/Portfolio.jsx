import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const portfolioItems = [
    {
      img: "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/06/8-2-400x400.jpg",
      category: "Emergency Care",
      title: "24/7 Emergency Services for Critical Cases",
    },
    {
      img: "https://themeperch.net/doctoraltheme/wp-content/uploads/2022/08/Cardiology-400x400.jpg",
      category: "Cardiology",
      title: "Advanced Heart Care with Modern Equipment",
    },
    {
      img: "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/06/7-2-400x384.jpg",
      category: "Orthopedic",
      title: "Best Treatment for Bone & Joint Disorders",
    },
    {
      img: "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/cardiac-2-400x400.jpg",
      category: "Neurology",
      title: "Comprehensive Care for Neurological Disorders",
    },
    {
      img: "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/06/1-1-400x400.jpg",
      category: "Dental Care",
      title: "Providing Top-Notch Dental Treatments",
    },
    {
      img: "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/06/2-2-400x391.jpg",
      category: "General Medicine",
      title: "Complete Medical Checkups & Consultations",
    },
  ];

  return (
    <div className="container mx-auto px-5 md:px-0 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Hospital Services
        </h1>
        <p className="text-gray-600 max-w-4xl mx-auto mt-2">
          Our hospital provides world-class healthcare services, specializing in
          various fields to ensure optimal patient care and satisfaction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
          >
            <img
              src={item.img}
              alt={item.category}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <p className="text-blue-600 font-medium">{item.category}</p>
              <h3 className="text-lg font-semibold text-gray-800 mt-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm flex-grow">
                Our dedicated team ensures quality and effective treatment in{" "}
                {item.category.toLowerCase()}.
              </p>
              <div className="mt-4">
                <Link to="/explore">
                  <Button text="Read More" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

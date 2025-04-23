import React from "react";
import { FaTooth } from "react-icons/fa";
import { BsFillEmojiHeartEyesFill, BsFillBox2HeartFill } from "react-icons/bs";

const Dental = () => {
  return (
    <div className="flex flex-wrap items-center bg-gray-100 py-12 px-6 md:px-16 lg:px-24">
      {/* Left Side (Image Section) */}
      <div
        className="flex-grow h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/dr04-2.jpg)",
        }}
      ></div>

      {/* Right Side (Content Section) */}
      <div className="flex-grow p-6 md:w-1/3 lg:w-1/4">
        <h3 className="text-gray-700 font-bold mb-3">
          <span className="text-blue-600">Dental Care</span> Comprehensive oral health services
        </h3>
        <p className="text-gray-600">
          Our dental services focus on preventive care and advanced treatment to ensure a healthy and beautiful smile.
        </p>

        {/* Services List */}
        <div className="flex flex-col gap-4 mt-4">
          {[
            { icon: <BsFillBox2HeartFill />, title: "Teeth Cleaning & Whitening" },
            { icon: <FaTooth />, title: "Pediatric & Adult Dentistry" },
            { icon: <BsFillEmojiHeartEyesFill />, title: "Orthodontics & Braces" },
          ].map((item, index) => (
            <div key={index} className="flex items-center">
              {/* Icon */}
              <div
                className="flex items-center justify-center h-14 w-14 text-2xl bg-white text-blue-600 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-600 hover:text-white"
              >
                {item.icon}
              </div>
              {/* Text Content */}
              <div className="ml-3">
                <h5 className="text-gray-900 font-semibold mb-1">{item.title}</h5>
                <p className="text-gray-600 text-sm">
                  Our experts use advanced techniques to ensure pain-free treatments and long-lasting results.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dental;
import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { BsFillEmojiHeartEyesFill, BsFillBox2HeartFill } from "react-icons/bs";

const Xray = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 py-10 px-6 md:px-16 space-y-8 md:space-y-0 md:space-x-8">
      {/* Left Side (Image Section) */}
      <div
        className="w-full md:w-1/2 h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url(https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/dr04-2.jpg)" }}
      ></div>

      {/* Right Side (Content Section) */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h3 className="text-gray-700 font-bold text-xl md:text-2xl">
          <span className="text-blue-600">X-Ray Diagnostic </span> Specialist hearing services are provided
        </h3>
        <p className="text-gray-600">
          Specialist hearing services are provided through our partners Audiomax whose vision is to maximize the quality of life of people with hearing impairment.
        </p>

        {/* Services List */}
        <div className="space-y-6">
          {[ 
            { icon: <BsFillBox2HeartFill />, title: "Hearing Tests & Aids" },
            { icon: <FaHeartbeat />, title: "Paediatric & Adult Audiology" },
            { icon: <BsFillEmojiHeartEyesFill />, title: "Provision & Servicing of Hearing Instruments" }
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              {/* Icon */}
              <div className="h-14 w-14 flex items-center justify-center text-2xl text-blue-600 bg-white rounded-lg shadow-md transition-transform duration-300 hover:bg-blue-600 hover:text-white">
                {item.icon}
              </div>
              
              {/* Text Content */}
              <div>
                <h5 className="text-lg font-semibold text-gray-800">{item.title}</h5>
                <p className="text-gray-600 text-sm">
                  Unlike traditional methods, you can see in real-time what is or is not working for your business online.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Xray;
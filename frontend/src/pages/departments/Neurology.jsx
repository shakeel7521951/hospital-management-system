import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { BsFillEmojiHeartEyesFill, BsFillBox2HeartFill } from "react-icons/bs";

const Neurology = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-gray-100 min-h-[70vh] gap-8 mt-12 p-6 lg:p-12">
      
      {/* Left Side (Image Section) */}
      <div
        className="w-full lg:w-1/2 h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url(https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/dr06-2.jpg)" }}
      ></div>
      
      {/* Right Side (Content Section) */}
      <div className="w-full lg:w-1/2 p-4 lg:p-8">
        <h3 className="text-gray-700 font-bold text-xl lg:text-2xl mb-4">
          <span className="text-blue-600">Neurology</span> Specialist hearing services are provided
        </h3>
        <p className="text-gray-600 mb-6">
          Specialist hearing services are provided through our partners Audiomax who's vision is to maximise the quality of life of people with hearing impairment.
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
              <div className="h-14 w-14 flex items-center justify-center text-2xl bg-white text-blue-600 rounded-lg shadow-md transition duration-300 hover:bg-blue-600 hover:text-white">
                {item.icon}
              </div>
              {/* Text Content */}
              <div>
                <h5 className="text-gray-800 font-semibold text-lg">{item.title}</h5>
                <p className="text-gray-600 text-sm">
                  Unlike traditional methods, you can see in real time what is or is not working for your business online.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Neurology;

import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { BsFillEmojiHeartEyesFill, BsFillBox2HeartFill } from "react-icons/bs";

const Pediatrics = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 py-10 md:h-[100vh] gap-8 mt-10 px-6 md:px-20">
      {/* Left Side (Image Section) */}
      <div
        className="flex-grow h-[300px] md:h-full w-full md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url(https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/dr05-2.jpg)" }}
      ></div>

      {/* Right Side (Content Section) */}
      <div className="flex-grow w-full md:w-1/2 p-6">
        <h3 className="text-gray-700 font-bold text-lg md:text-2xl mb-4">
          <span className="text-blue-600">Cancer Screening</span> hearing services are provided
        </h3>
        <p className="text-gray-600 mb-6">
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
              <div className="h-14 w-14 flex items-center justify-center text-2xl bg-white text-blue-600 rounded-lg shadow-md transition duration-300 hover:bg-blue-600 hover:text-white">
                {item.icon}
              </div>
              {/* Text Content */}
              <div>
                <h5 className="text-gray-800 font-semibold mb-1">{item.title}</h5>
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

export default Pediatrics;

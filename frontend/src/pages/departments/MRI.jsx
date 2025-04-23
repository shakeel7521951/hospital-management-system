import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { BsFillEmojiHeartEyesFill, BsFillBox2HeartFill } from "react-icons/bs";

const MRI = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 py-10 mt-12 gap-10 px-6 md:px-12">
      
      {/* Left Side (Image Section) */}
      <div
        className="w-full md:w-1/2 h-64 md:h-[70vh] bg-cover bg-center rounded-lg"
        style={{
          backgroundImage:
            "url(https://themeperch.net/doctoraltheme/wp-content/themes/doctoral/assets/images/doctor.png)",
        }}
      ></div>

      {/* Right Side (Content Section) */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h3 className="text-gray-700 font-bold text-xl md:text-2xl">
          MRI Specialist hearing services are provided
        </h3>
        <p className="text-gray-600">
          Specialist hearing services are provided through our partners Audiomax, whose vision is to maximize the quality of life of people with hearing impairment.
        </p>

        {/* Services List */}
        <div className="space-y-6">
          {[
            { icon: <BsFillBox2HeartFill />, title: "Hearing Tests & Aids" },
            { icon: <FaHeartbeat />, title: "Paediatric & Adult Audiology" },
            { icon: <BsFillEmojiHeartEyesFill />, title: "Provision & Servicing of Hearing Instruments" },
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              {/* Icon */}
              <div
                className="flex items-center justify-center w-16 h-16 text-2xl bg-white text-blue-600 rounded-lg shadow-lg transition duration-300 hover:bg-blue-600 hover:text-white"
              >
                {item.icon}
              </div>

              {/* Text Content */}
              <div>
                <h5 className="text-gray-800 font-semibold">{item.title}</h5>
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

export default MRI;

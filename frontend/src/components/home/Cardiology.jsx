import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { BsFillEmojiHeartEyesFill, BsFillBox2HeartFill } from "react-icons/bs";

const Cardiology = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 py-12 px-6 md:px-16">
      {/* Left Side (Image Section) */}
      <div
        className="flex-1 h-64 md:h-[80vh] w-full md:w-auto bg-center bg-cover rounded-xl shadow-lg"
        style={{
          backgroundImage:
            "url(https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/dr02-2.jpg)",
        }}
      ></div>
      {/* Right Side (Content Section) */}
      <div className="flex-1 max-w-lg p-6 md:pl-12">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          <span className="text-blue-600">Cardiology & Heart Care</span> -
          Specialized Treatment Services
        </h3>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          We provide advanced cardiac care, including diagnostics, treatment,
          and rehabilitation. Our expert team ensures personalized attention for
          all heart-related concerns.
        </p>

        {/* Services List */}
        <div className="mt-6 space-y-6">
          {[
            { icon: <BsFillBox2HeartFill />, title: "Heart Health Screening" },
            { icon: <FaHeartbeat />, title: "Emergency Cardiac Care" },
            {
              icon: <BsFillEmojiHeartEyesFill />,
              title: "Advanced Cardiac Procedures",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              {/* Icon */}
              <div className="h-14 w-14 flex items-center justify-center text-2xl text-blue-600 bg-white rounded-lg shadow-md transition duration-300 hover:bg-blue-600 hover:text-white">
                {item.icon}
              </div>
              {/* Text Content */}
              <div>
                <h5 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.title}
                </h5>
                <p className="text-gray-600 text-sm md:text-base">
                  Our specialized procedures help detect and treat cardiac
                  diseases with high precision.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cardiology;

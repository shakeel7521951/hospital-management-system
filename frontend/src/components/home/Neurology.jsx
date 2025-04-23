import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { BsFillEmojiHeartEyesFill, BsFillBox2HeartFill } from "react-icons/bs";
import Button from "../Button";

const Neurology = () => {
  const services = [
    { icon: <BsFillBox2HeartFill />, title: "Hearing Tests & Aids" },
    { icon: <FaHeartbeat />, title: "Paediatric & Adult Audiology" },
    {
      icon: <BsFillEmojiHeartEyesFill />,
      title: "Provision & Servicing of Hearing Instruments",
    },
  ];

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center bg-gray-100 min-h-screen py-10 px-5 lg:px-20 gap-10">
      
      {/* Left Side (Image Section) */}
      <div className="w-full lg:w-1/2">
        <div className="relative w-full h-80 md:h-[80vh]">
          <img
            src="https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/dr06-2.jpg"
            alt="Neurology Specialist"
            className="w-full h-full object-fit rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Right Side (Content Section) */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h3 className="text-2xl md:text-4xl font-bold text-gray-800">
          <span className="text-blue-600">Neurology</span> - Specialist Hearing
          Services
        </h3>
        <p className="text-gray-600">
          Specialist hearing services are provided through our partners
          Audiomax, whose vision is to maximize the quality of life for people
          with hearing impairments.
        </p>

        {/* Services List */}
        <div className="space-y-6">
          {services.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center text-2xl text-blue-600 bg-white rounded-lg shadow-md transition-transform transform hover:scale-110 hover:bg-blue-600 hover:text-white">
                {item.icon}
              </div>

              {/* Text Content */}
              <div>
                <h5 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h5>
                <p className="text-gray-600 text-sm">
                  Unlike traditional methods, you can see in real-time what is
                  or isn’t working for your business online.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <Button text="Read More"/>
      </div>
    </div>
  );
};

export default Neurology;

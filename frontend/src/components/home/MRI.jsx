import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { BsFillEmojiHeartEyesFill, BsFillBox2HeartFill } from "react-icons/bs";

const services = [
  { icon: <BsFillBox2HeartFill />, title: "Hearing Tests & Aids" },
  { icon: <FaHeartbeat />, title: "Paediatric & Adult Audiology" },
  { icon: <BsFillEmojiHeartEyesFill />, title: "Provision & Servicing of Hearing Instruments" },
];

const MRI = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center py-16 px-6 lg:px-20 gap-12">
      {/* Left Side - Image */}
      <div className="flex-1 h-80 md:h-[80vh] object-fit rounded-xl shadow-lg" 
           style={{ backgroundImage: "url(https://themeperch.net/doctoraltheme/wp-content/themes/doctoral/assets/images/doctor.png)" }}>
      </div>
      
      {/* Right Side - Content */}
      <div className="flex-1 max-w-lg text-gray-700">
        <h3 className="text-2xl md:text-4xl font-bold mb-4"><span className="text-blue-700 ">MRI</span> Specialist Hearing Services</h3>
        <p className="text-gray-600 mb-6">
          Specialist hearing services are provided through our partners Audiomax, whose vision is to maximize the quality of life 
          of people with hearing impairment.
        </p>
        
        {/* Services List */}
        <div className="space-y-6">
          {services.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center text-2xl text-blue-600 bg-white rounded-lg shadow-md transition duration-300 transform hover:bg-blue-600 hover:text-white">
                {item.icon}
              </div>
              {/* Text Content */}
              <div>
                <h5 className="text-lg font-semibold text-gray-800">{item.title}</h5>
                <p className="text-gray-600 text-sm">Unlike traditional methods, you can see in real-time what is or isn’t working for your business online.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MRI;
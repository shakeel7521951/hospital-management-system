import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { BsFillEmojiHeartEyesFill, BsFillBox2HeartFill } from "react-icons/bs";

const Hematology = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 min-h-screen mt-12 gap-6 px-6 md:px-12 py-10">
      
      {/* Left Side (Image Section) */}
      <div
        className="w-full md:w-1/2 h-64 md:h-[70vh] bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: "url(https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/dr01-2.jpg)",
        }}
      ></div>

      {/* Right Side (Content Section) */}
      <div className="w-full md:w-1/2 p-6">
        <h3 className="text-gray-700 font-bold text-xl md:text-2xl mb-3">
          <span className="text-blue-600">Bills and Insurance </span> Specialist hearing services are provided
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Our team provides expert audiology services and hearing care solutions through trusted partners like Audiomax, ensuring enhanced hearing experiences.
        </p>

        {/* Services List */}
        <div className="mt-6 space-y-6">
          {[
            { 
              icon: <BsFillBox2HeartFill />, 
              title: "Hearing Tests & Aids", 
              description: "Our advanced hearing tests diagnose issues accurately and offer cutting-edge hearing aids tailored to your needs." 
            },
            { 
              icon: <FaHeartbeat />, 
              title: "Paediatric & Adult Audiology", 
              description: "We provide specialized audiology services for children and adults, ensuring proper hearing care at every stage of life." 
            },
            { 
              icon: <BsFillEmojiHeartEyesFill />, 
              title: "Provision & Servicing of Hearing Instruments", 
              description: "Regular servicing and customization of hearing instruments for long-lasting and optimized hearing support." 
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              {/* Icon Box */}
              <div className="flex items-center justify-center w-20 h-12 text-blue-600 bg-white rounded-lg shadow-lg transition duration-300 hover:bg-blue-600 hover:text-white">
                {item.icon}
              </div>

              {/* Text Content */}
              <div>
                <h5 className="text-gray-800 font-semibold">{item.title}</h5>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Hematology;

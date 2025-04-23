import React from "react";

const Adil = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 py-12 px-6 md:px-16 gap-10">
      {/* Left Side - Content */}
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-gray-700 text-3xl font-bold">Dr. Adil Haider</h3>
        <p className="text-lg text-blue-600 font-semibold">Dentist</p>
        <p className="text-gray-600 text-md">Available: <span className="font-medium">8 PM - 10 AM</span></p>
        <p className="text-gray-600 leading-relaxed">
          Dr. Adil Haider is a highly experienced dentist specializing in advanced oral care.
          With years of expertise, he ensures the best treatment and patient care using modern techniques.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 h-96 bg-cover bg-center rounded-lg shadow-lg"
        style={{ backgroundImage: "url(https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/dr8-2.jpg)" }}>
      </div>
    </div>
  );
};

export default Adil;

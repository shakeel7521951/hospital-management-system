import React from "react";

const Emergancy = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 py-10 mt-12 gap-6 px-6 md:px-12">
      
      {/* Left Side (Text Content) */}
      <div className="w-full md:w-2/3 p-6 text-center md:text-left">
        <h3 className="text-gray-700 font-bold text-xl md:text-2xl mb-3">
          About Dr. Adeeb Rizvi
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Nam vehicula malesuada lectus, interdum fringilla nibh. Duis aliquam vitae metus a pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum augue quis augue ornare, eget faucibus felis pharetra. Proin condimentum et leo quis fringilla.
        </p>

        {/* Doctor's Signature Image */}
        <div className="mt-4 flex justify-center md:justify-start">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWCvfl_3zvKQJ_Iq5ulGWYoQty7NjUcdWbQ&s"
            alt="Doctor's Signature"
            className="w-32"
          />
        </div>

        {/* Buttons */}
        <div className="mt-5 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
          <a
            className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm md:text-base transition duration-300 hover:bg-blue-700"
            data-bs-toggle="offcanvas"
            href="#offcanvasHealthTips"
            role="button"
          >
            Get Health Tips
          </a>

          <a
            className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm md:text-base transition duration-300 hover:bg-blue-700"
            data-bs-toggle="offcanvas"
            href="#offcanvasLearnMore"
            role="button"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Right Side (Background Image) */}
      <div className="w-full md:w-2/3 h-64 md:h-[70vh] bg-cover bg-center rounded-lg"
        style={{ backgroundImage: "url(https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/dr8-2.jpg)" }}>
      </div>

    </div>
  );
};

export default Emergancy;

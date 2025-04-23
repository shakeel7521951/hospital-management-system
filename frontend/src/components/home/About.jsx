import React from "react";
import { FaMoneyBills } from "react-icons/fa6";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { ImBullhorn } from "react-icons/im";
import { GrUserManager } from "react-icons/gr";
// import Portfolio from "./Portfolio";

const About = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 min-h-[80vh] px-6 md:px-16 py-12">
        {/* Left Side (Image Section) */}
        <div
          className="w-full md:w-1/2 h-96 bg-cover bg-center rounded-xl shadow-lg"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/doctor-asking-nurse-pills-consultation-medical-office-physician-specialist-medicine-providing-health-care-services-consultation-diagnostic-examination-treatment-hospital-cabinet_482257-14532.jpg)",
          }}
        ></div>

        {/* Right Side (Content Section) */}
        <div className="w-full md:w-2/5 text-left mt-10 md:mt-0">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            We Provide Special Health Services
          </h3>
          <p className="text-gray-600">
            Unlike traditional methods, you can see in real-time what is or is
            not working for your business online.
          </p>

          {/* Services List */}
          <div className="mt-6 space-y-6">
            {[
              { icon: <FaMoneyBills />, title: "Bills & Insurance" },
              { icon: <PiShoppingBagOpenFill />, title: "Cancer Screening" },
              { icon: <ImBullhorn />, title: "Cardiac Surgery" },
              { icon: <GrUserManager />, title: "Neurology" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                {/* Icon */}
                <div className="h-16 w-16 flex items-center justify-center text-2xl text-blue-600 bg-white rounded-lg shadow-md transition duration-300 hover:bg-blue-600 hover:text-white">
                  {item.icon}
                </div>

                {/* Text Content */}
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h5>
                  <p className="text-gray-600 text-sm">
                    Integer tincidunt justo eu blandit dictum.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Portfolio /> */}
    </>
  );
};

export default About;

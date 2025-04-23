import React from "react";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Subscription Section */}
      <div className="relative w-full h-[300px]">
        <img
          src="https://img.freepik.com/premium-photo/stethoscope-pills-pen-keyboard-blue-background_384529-50.jpg"
          alt="Subscription"
          className="w-full h-[300px] object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold">We Are Ready to Help You</h1>
          <p className="text-lg md:text-xl my-3">Subscribe for Monthly Health Tips</p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md outline-none w-64 bg-white text-black"
              required
            />
            <button
              type="submit"
              className="bg-green-600 px-2 py-2 rounded-r-md text-white font-semibold hover:bg-green-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <img
            src="https://themeperch.net/doctoraltheme/wp-content/themes/doctoral/assets/images/logo.png"
            alt="HMS Logo"
            className="w-32 mx-auto md:mx-0"
          />
          <p className="mt-3 text-sm">
            Your trusted healthcare partner offering high-quality medical
            services with expert doctors and cutting-edge facilities.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <FaFacebookSquare className="text-blue-500 text-2xl hover:text-blue-700" />
            <IoLogoYoutube className="text-red-500 text-2xl hover:text-red-700" />
            <FaTwitter className="text-blue-400 text-2xl hover:text-blue-600" />
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h2 className="text-xl font-semibold border-b pb-2">Our Services</h2>
          <ul className="mt-3 space-y-2">
            {["MRI Scanning", "Cancer Screening", "Emergency Surgery", "Neurology"].map((service, index) => (
              <li key={index}>
                <Link
                  to={`/${service.replace(/\s+/g, "")}`}
                  className="relative hover:text-blue-400 transition-colors duration-300 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Specialist Doctors */}
        <div>
          <h2 className="text-xl font-semibold border-b pb-2">Specialist Doctors</h2>
          <ul className="mt-3 space-y-2">
            {["Dr. Shahida Shafi", "Dr. Faizan Akram", "Dr. Adil Haider", "Dr. Faisal Sultan", "Dr. Asima Yousaf"].map(
              (doctor, index) => (
                <li key={index}>
                  <Link
                    to={`/${doctor.replace(/\s+/g, "")}`}
                    className="relative hover:text-blue-400 transition-colors duration-300 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                  >
                    {doctor}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold border-b pb-2">Chief Medical Officer</h2>
          <h3 className="text-lg font-bold text-green-400">Dr. Javed Akram</h3>
          <p className="text-sm">1-800-1234-567</p>
          <p className="text-sm my-2">
            Providing expert medical guidance and advanced healthcare solutions.
          </p>
          <Button text="Learn More"/>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 text-center py-4">
        <p className="text-sm">
          &copy; 2025 HMS | Designed by <span className="text-green-400">Saira Zafar</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

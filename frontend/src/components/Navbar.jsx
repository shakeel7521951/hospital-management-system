import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userProfile = null; // Change this to an object when the user is logged in

  return (
    <div className="mb-20">
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-5 md:px-0 flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/">
            <img
              src="https://themeperch.net/doctoraltheme/wp-content/themes/doctoral/assets/images/logo.png"
              alt="Company Logo"
              className="w-36 h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 text-lg">
            {["Home", "About", "Doctors","Explore", "Contact Us"].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="relative hover:text-blue-600 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:bottom-0 after:left-1/2 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Appointment Button (Desktop Only) */}
          <div className="hidden md:flex mt-2">
            {userProfile ? (
              <Link>
                <Button text="Make an Appointment" />
              </Link>
            ) : (
              <div className="flex gap-2">
                <Link to="/login">
                  <Button text="Login" />
                </Link>
                <Link to="/sign-up">
                  <Button text="Signup" />
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed top-14 left-0 w-64 h-full bg-white shadow-lg z-50 p-5 md:hidden flex flex-col items-center">
          <div>
            {/* <button className="self-end mb-5" onClick={() => setIsOpen(false)}>
              <FaTimes size={28} />
            </button> */}

            {/* Mobile Navigation Links */}
            {["Home", "About","Doctors", "Explore", "Contact Us"].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="relative text-xl text-center block py-2 hover:text-blue-600 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:bottom-0 after:left-1/2 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Buttons (Bottom Placement) */}
          <div className="">
            {userProfile ? (
              <Link>
                <Button text="Make an Appointment" />
              </Link>
            ) : (
              <div className="flex mt-3 gap-2">
                <Link to="/login">
                  <Button text="Login" />
                </Link>
                <Link to="/sign-up">
                  <Button text="Sign up" />
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

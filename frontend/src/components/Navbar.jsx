import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";
import { clearProfile, selectUserProfile } from "../redux/slices/UserSlice";
import { useLogoutMutation } from "../redux/slices/UserApi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const userProfile = useSelector(selectUserProfile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApi] = useLogoutMutation();

  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "";
  };

  const handleLogout = async () => {
    try {
      await logoutApi();
      dispatch(clearProfile());
      setShowDropdown(false);
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div className="mb-20">
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-5 md:px-0 flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://themeperch.net/doctoraltheme/wp-content/themes/doctoral/assets/images/logo.png"
              alt="Company Logo"
              className="w-36 h-auto"
            />
          </Link>

          {/* Centered Navigation */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-6 text-lg">
            {["Home", "About", "Doctors", "Explore", "Contact Us"].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="relative hover:text-blue-600 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:bottom-0 after:left-1/2 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right Side Auth / Profile */}
          <div className="hidden md:flex items-center gap-4 relative">
            {userProfile ? (
              <>
                <Link to="/appointment" className="mt-1">
                  <Button text="Make an Appointment" />
                </Link>
                <div
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="text-blue-600 font-semibold text-lg border-2 text-center cursor-pointer rounded-full w-[32px] h-[32px] flex items-center justify-center"
                >
                  {getInitial(userProfile.name)}
                </div>

                {/* Dropdown */}
                {showDropdown && (
                  <div className="absolute right-0 top-12 bg-white shadow-lg border rounded-md py-2 z-50 min-w-[160px]">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setShowDropdown(false)}
                    >
                      My Profile
                    </Link>
                    {userProfile.role === "admin" && (
                      <Link
                        to="/admin/dashboard"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setShowDropdown(false)}
                      >
                        Dashboard
                      </Link>
                    )}
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={handleLogout} // Call logout function on click
                    >
                      Logout
                    </button>
                  </div>
                )}
              </>
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

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-14 left-0 w-64 h-full bg-white shadow-lg z-50 p-5 md:hidden flex flex-col items-center">
          {["Home", "About", "Doctors", "Explore", "Contact Us"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase().replace(" ", "-")}`}
              className="relative text-xl text-center block py-2 hover:text-blue-600 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:bottom-0 after:left-1/2 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}

          <div className="mt-5">
            {userProfile ? (
              <>
                <Link to="/appointment">
                  <Button text="Make an Appointment" />
                </Link>
              </>
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

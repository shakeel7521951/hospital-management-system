import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useUserRegistrationMutation } from "../redux/slices/UserApi";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [userRegistration, { isLoading }] = useUserRegistrationMutation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match", { position: "top-center" });
      return;
    }

    try {
      const response = await userRegistration({
        name,
        email,
        password,
      }).unwrap();
      if (response.success) {
        toast.success(response.message, { position: "top-center" });
        navigate("/user-verification", { state: { email } });
      }
    } catch (err) {
      console.error("Signup failed:", err);
      const errorMessage =
        err?.data?.message ||
        "An error occurred during signup. Please try again.";
      toast.error(errorMessage, { position: "top-center" });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen md:py-10">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Sign Up
        </h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4 relative">
            <label className="block text-gray-700 font-medium">Name</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                className="w-full p-2 pl-10 border rounded-lg focus:shadow-md focus:shadow-blue-400 focus:outline-none"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 font-medium">Email</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
              <input
                type="email"
                className="w-full p-2 pl-10 border rounded-lg focus:shadow-md focus:shadow-blue-400 focus:outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 font-medium">Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-500" />
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-2 pl-10 pr-10 border rounded-lg focus:shadow-md focus:shadow-blue-400 focus:outline-none"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-600 cursor-pointer" />
                ) : (
                  <FaEye className="text-gray-600 cursor-pointer" />
                )}
              </button>
            </div>
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 font-medium">
              Confirm Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-500" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full p-2 pl-10 pr-10 border rounded-lg focus:shadow-md focus:shadow-blue-400 focus:outline-none"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? (
                  <FaEyeSlash className="text-gray-600 cursor-pointer" />
                ) : (
                  <FaEye className="text-gray-600 cursor-pointer" />
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex cursor-pointer justify-center items-center bg-blue-600 text-white py-2 rounded-lg font-semibold transition-all ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Signing Up...
              </>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-500 font-medium hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;

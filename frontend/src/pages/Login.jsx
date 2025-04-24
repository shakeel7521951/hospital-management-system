import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useLoginMutation } from "../redux/slices/UserApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setProfile } from "../redux/slices/UserSlice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }).unwrap();
      if (response.success) {
        toast.success(response.message, { position: "top-center" });
        dispatch(setProfile(response?.user));
        navigate("/");
      }
    } catch (err) {
      // Improved error handling
      const errorMessage =
        err?.data?.message ||
        err?.message ||
        "An error occurred. Please try again.";
      toast.error(errorMessage, { position: "top-center" });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>
        <form onSubmit={handleLogin}>
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
          <div className=" relative">
            <label className="block text-gray-700 font-medium">Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-500" />
              <input
                type="password"
                className="w-full p-2 pl-10 border rounded-lg focus:shadow-md focus:shadow-blue-400 focus:outline-none"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="ms-auto w-fit mb-3 mt-0">
            <Link to="/forgot-passoword">Forgot Password?</Link>
          </div>
          <button
            type="submit"
            className={`w-full py-2 rounded-lg font-semibold transition-all ${
              isLoading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white`}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        {isError && (
          <p className="text-red-500 text-center mt-4">
            {error?.message || "Login failed"}
          </p>
        )}
        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <a
            href="/sign-up"
            className="text-blue-500 font-medium hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

import React, { useState } from "react";
import { FaClock, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    message: "",
    agree: false,
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      alert("Message sent successfully!");
      // Optionally clear form:
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        message: "",
        agree: false,
      });
      setValidated(false);
    }

    setValidated(true);
  };

  const contactDetails = [
    {
      icon: <FaLocationDot className="text-4xl text-blue-600" />,
      title: "Address",
      text: "123 Health Lane, Medical City, NY 10001",
    },
    {
      icon: <FaPhoneAlt className="text-4xl text-blue-600" />,
      title: "Call Us",
      text: "+1 (234) 567-8900\n+1 (234) 567-8901",
    },
    {
      icon: <FaEnvelope className="text-4xl text-blue-600" />,
      title: "Email Us",
      text: "info@hospital.com\nsupport@hospital.com",
    },
    {
      icon: <FaClock className="text-4xl text-blue-600" />,
      title: "Working Hours",
      text: "Outpatient: 8 AM - 5 PM\nEmergency: 24/7",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto px-4">
        {/* Header */}
        <div className="container mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold">
            Let Us Help <span className="text-blue-600">You</span>
          </h1>
          <p className="text-gray-600 mt-2">
            We are here to provide you with the best healthcare services.
          </p>
        </div>

        {/* Contact Details */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactDetails.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2 whitespace-pre-line">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            Get In <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Have questions or need assistance? Reach out to us!
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
          <h4 className="text-2xl font-semibold text-center mb-6">Contact Us</h4>
          <form noValidate validated={validated.toString()} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                <span className="text-gray-700">
                  I agree to the terms and conditions
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition duration-300 text-center"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="text-center mt-12 mb-8">
          <h1 className="text-4xl font-bold">
            Find Us On The <span className="text-blue-600">Google Map</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Visit us at our location for personalized care.
          </p>
        </div>
        <div className="mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111256.59449679207!2d71.60760928829154!3d29.377064566863567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c46c611ad5%3A0xfcdf0da8e103f862!2sBahawalpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1738256125117!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

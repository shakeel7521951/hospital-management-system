import React, { useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import Button from "../Button";
import { Link } from "react-router-dom";

const carouselData = [
  {
    text: "Neurology Department",
    description:
      "Advanced diagnosis and treatment for disorders of the nervous system with cutting-edge technology and expert specialists.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: "🧠",
  },
  {
    text: "Billing & Insurance",
    description:
      "Streamlined financial services with transparent billing and comprehensive insurance support for stress-free healthcare.",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    icon: "💳",
  },
  {
    text: "Cardiac Surgery Center",
    description:
      "State-of-the-art cardiac care with minimally invasive techniques and world-class surgical expertise.",
    image:
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: "❤️",
  },
  {
    text: "Cancer Screening",
    description:
      "Early detection programs with precision diagnostics to improve outcomes and survival rates.",
    image:
      "https://images.unsplash.com/photo-1579154343071-2d8d0f57b9c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    icon: "🩺",
  },
  {
    text: "Cardiology Specialists",
    description:
      "Comprehensive heart care from prevention to intervention with personalized treatment plans.",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
    icon: "🫀",
  },
];

const FlickityCarousel = () => {
  const flickityRef = useRef(null);

  useEffect(() => {
    flickityRef.current = new Flickity(".carousel", {
      cellAlign: "center",
      contain: true,
      wrapAround: true,
      autoPlay: 5000,
      pageDots: true,
      prevNextButtons: true,
      groupCells: 1,
      adaptiveHeight: true,
      draggable: true,
      fade: true,
    });

    return () => flickityRef.current.destroy();
  }, []);

  return (
    <div className="relative">
      <div className="carousel w-full overflow-hidden mx-auto" data-flickity>
        {carouselData.map((item, index) => (
          <div
            key={index}
            className="carousel-cell w-full h-[75vh] md:h-[95vh] flex items-center justify-center bg-cover bg-center shadow-lg mx-2 relative"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            {/* Content container */}
            <div className="relative z-10 p-8 text-white text-center w-full max-w-4xl mx-auto h-full flex flex-col justify-center items-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif tracking-tight">
                {item.text}
              </h2>
              <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl">
                {item.description}
              </p>
              <div className="flex gap-4">
                <Link to="/doctors">
                  <Button text="Book Appointment" />
                </Link>
                <Link to="/services">
                  <Button
                    text="Learn More"
                    bgColor="bg-transparent"
                    hoverBgColor="hover:bg-white/10"
                    textColor="text-white"
                    border="border border-white"
                  />
                </Link>
              </div>

              {/* Emergency badge */}
              {index === 0 && (
                <div className="absolute bottom-16 left-0 bg-red-600 text-white px-4 py-2 rounded-full flex items-center gap-2 animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8a1 1 0 10-2 0v3a1 1 0 00-1 1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-2V8z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Emergency Services Available 24/7
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Hospital info ribbon */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 py-3 z-20 shadow-md">
        <div className="container mx-auto flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span>24/7 Emergency</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <span>Expert Doctors</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            <span>Advanced Equipment</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            <span>Patient-Centered Care</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlickityCarousel;

import React from "react";

const Button = ({
  text,
  bgHover = "white",
  textHover = "black",
  cutHover = "black",
}) => {
  return (
    <div>
      {/* <button
        className="relative overflow-hidden bg-[#0957DE] w-fit px-20 py-3 cursor-pointer font-semibold text-white transition-all duration-500 group"
        style={{ clipPath: "polygon(100% 0, 85% 100%, 0 100%, 0 0)" }}
      >
        <div
          className={`absolute top-0 right-2 h-[100%] w-[50px] bg-${cutHover} z-20`}
          style={{ clipPath: "polygon(100% 0, 45% 100%, 25% 100%, 78% 0)" }}
        ></div>
        <span className={`absolute inset-0 bg-${bgHover} w-0 transition-all duration-500 group-hover:w-full z-10`}></span>
        <span className={`relative z-30 ms-[-30px] group-hover:text-${textHover}`}>{text}</span>
      </button> */}

      <button
        type="button"
        class="text-white bg-gradient-to-r py-3 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 text-center me-2 mb-2 cursor-pointer"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;

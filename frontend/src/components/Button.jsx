import React from "react";
import PropTypes from "prop-types";

const Button = ({
  text,
  bgColor = "bg-blue-600",
  hoverBgColor = "hover:bg-blue-700",
  textColor = "text-white",
  border = "",
  icon = null,
  size = "md",
  fullWidth = false,
  shadow = "shadow-md hover:shadow-lg",
  transition = "transition-all duration-300 ease-in-out",
  transform = "hover:-translate-y-1",
  rounded = "rounded-xl",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  const disabledClasses = disabled ? "opacity-70 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${sizeClasses[size]}
        ${bgColor}
        ${textColor}
        ${border}
        ${shadow}
        ${transition}
        ${transform}
        ${rounded}
        ${hoverBgColor}
        ${fullWidth ? "w-full" : ""}
        ${disabledClasses}
        font-semibold
        flex items-center justify-center
        gap-3
        relative
        overflow-hidden
        group
        ${className}
      `}
    >
      {/* Button content with optional icon */}
      <span className="relative z-10 flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {text}
      </span>
      
      {/* Animated background effect */}
      {!disabled && (
        <>
          <span className="
            absolute inset-0 
            bg-gradient-to-r from-white/10 via-white/5 to-transparent 
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
          "></span>
          
          {/* Ripple effect */}
          <span className="absolute inset-0 overflow-hidden">
            <span className="
              absolute
              block
              w-10 h-10
              bg-white/20
              rounded-full
              opacity-0
              group-active:opacity-100
              group-active:scale-[10]
              transition-all
              duration-700
              ease-out
              -translate-x-1/2 -translate-y-1/2
            "></span>
          </span>
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  hoverBgColor: PropTypes.string,
  textColor: PropTypes.string,
  border: PropTypes.string,
  icon: PropTypes.node,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  fullWidth: PropTypes.bool,
  shadow: PropTypes.string,
  transition: PropTypes.string,
  transform: PropTypes.string,
  rounded: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
};

export default Button;
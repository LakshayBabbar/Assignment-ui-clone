import React from "react";

const Button = ({
  children,
  type = "button",
  size,
  className,
  onClick,
  variant,
}) => {
  const variants = {
    primary: "bg-red-500 text-white px-4 py-2 rounded hover:shadow-red-300",
    outline: "border bg-white px-4 border-black py-2 rounded hover:shadow-black",
  };

  return (
    <button
      type={type}
      className={`${className}
      ${size === "xl" && "text-xl px-5 py-4"} 
      ${variant === "outline" ? variants.outline : variants.primary} hover:shadow-[5px_5px_0px_0px] transition-all duration-300`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

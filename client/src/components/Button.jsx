import React from "react";

const Button = ({ children, onClick, href }) => {
  if (href) {
    return (
      <a
        href={href}
        className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500 transition duration-300 ease-in-out"
      >
        {children}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500 transition duration-300 ease-in-out"
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";

// Ajoutez des props au composant Button
const Button = ({ children, onClick, href }) => {
  // Condition pour gérer le cas où un lien est fourni
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

  // Retourne un bouton si aucun lien n'est fourni
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

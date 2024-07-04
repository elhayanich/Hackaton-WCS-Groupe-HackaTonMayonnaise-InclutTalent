import React, { useState } from "react";
import Button from "./Button";

function Toggle({ buttonText, responseText }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button onClick={toggle}>{buttonText}</Button>
      {isOpen && <div>{responseText}</div>}
    </div>
  );
}

export default Toggle;

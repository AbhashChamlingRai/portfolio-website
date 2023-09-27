// ResumePopup.js
import React, { useState } from "react";

const ResumePopup = ({ imageUrl }) => {
  const [isOpen, setIsOpen] = useState(true);
  console.log(isOpen);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full flex justify-center z-50 fixed">
      {isOpen && (
        <div className="popup w-full flex justify-center bg-[#000000c2]">
          <div className="popup-content relative py-5 hover:scale-95 transition-transform duration-300">
            <span
              className="close font-bold hover:cursor-pointer"
              onClick={togglePopup}
            >
              Close
            </span>
            <img src={imageUrl} className="h-[100vh]" alt="Resume" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePopup;

import React from "react";
import "./modal.css";

const Modal = ({ error, onClose }) => {
  return (
    <div className="modal-container">
      <div>
        M
      </div>
      <div className="modal-content">
        <h2>Error</h2>
        <p>
          {error
            .split("(")[1]
            .split(")")[0]
            .split("/")[1]
            .replace("-", " ")
            .replace(/\b\w/g, (char) => char.toUpperCase())}
        </p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

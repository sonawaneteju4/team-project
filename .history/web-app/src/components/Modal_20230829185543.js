import React from "react";
import "./modal.css";

const Modal = ({ error, onClose }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
      <div className="modal-title">
          {error 
          && 
        <h2> Error
          </h2>
          }
      </div>
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

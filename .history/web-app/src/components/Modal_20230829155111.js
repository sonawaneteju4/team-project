import React from 'react'
import './modal.css'

const Modal = ({errorMessage, handleCloseModal}) => {
  return (
    <div className="modal-container">
    <div className="modal-content">
      <h2>Error</h2>
      <p>{errorMessage}</p>
      <button className="close-button" onClick={handleCloseModal}>Close</button>
    </div>
  </div>)
}

export default Modal
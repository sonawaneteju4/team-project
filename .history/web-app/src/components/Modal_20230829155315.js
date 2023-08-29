import React from 'react'
import './modal.css'

const Modal = ({error, onClick}) => {
  return (
    <div className="modal-container">
    <div className="modal-content">
      <h2>Error</h2>
      <p>{error}</p>
      <button className="close-button" onClick={handleCloseModal}>Close</button>
    </div>
  </div>)
}

export default Modal
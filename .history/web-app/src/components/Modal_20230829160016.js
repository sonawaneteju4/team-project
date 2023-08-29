import React from 'react'
import './modal.css'

const Modal = ({error, on}) => {
  return (
    <div className="modal-container">
    <div className="modal-content">
      <h2>Error</h2>
      <p>{error}</p>
      <button className="close-button" onClick={onClick}>Close</button>
    </div>
  </div>)
}

export default Modal
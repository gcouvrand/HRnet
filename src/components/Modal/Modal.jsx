import './index.css'
import React from 'react'

const Modal = ({ isShowing, close, text }) => {
  return (
    <div
      className={`background-closed ${isShowing ? 'background-opened' : ''}`}
    >
      <div className="modal">
        <p className="modal-text">{text}</p>
        <button className="modal-close" onClick={() => close()}>
          x
        </button>
      </div>
    </div>
  )
}

export default Modal

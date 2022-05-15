import "./index.css"
import React from "react";

const Modal = ({ isShowing, close }) => {
   return( 
       <div className={`background-closed ${isShowing ? "background-opened" : ""}`}>
                    <div className="modal">
                        <p className="modal-text">Employee Created!</p>
                        <button className="modal-close" onClick={() => close()}>x</button>
                </div>
        </div>
   )
}

export default Modal
import React from 'react'
import {RxCross2} from "react-icons/rx"
import './Modal.scss'

const Modal = ({setModalOpen}) => {
  return (
    <div className="modalBackground">
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <button
          onClick={() => {
            setModalOpen(false);
          }}
        >
          <RxCross2 color='#FFFF'/>
        </button>
      </div>
      <div className="title">
        <h3>
        Request a Call Back
          </h3>
      </div>
      <div className="body">
       <input type="text" />
       <input type="text" />
      </div>
      <div className="footer">
        <button
          onClick={() => {
           
          }}
          id="cancelBtn"
        >   
            Request a Call Back
        </button>
      </div>
    </div>
  </div>
  )
}

export default Modal
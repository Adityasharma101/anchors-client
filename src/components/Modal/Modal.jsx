import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

import "./Modal.scss";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";

const Modal = ({ setModalOpen }) => {  
  const [name , setName]= useState('');
  const [num , setNum]= useState('');
  let data = null;
  const handleCallbackSubmit  = async()=>{
    try {
      const response = await axios.post('http://52.66.204.208:3000/request-callback',{
        "name" : name,
        "contactNumber" : num
      })

      data = response.data;
      console.log(data)
    } catch (error) {
      console.log(error)
    }

  }
  return (  
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setModalOpen(false);
            }}
          >
            <RxCross2 color="#FFFF" />
          </button>
        </div>
        {data ? <Modal2/>: <Modal1 setName={setName} setNum={setNum} handleCallbackSubmit={ handleCallbackSubmit}/>}
      </div>
    </div>
  );
};

export default Modal;

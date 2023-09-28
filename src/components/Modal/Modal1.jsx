import React from 'react'

const Modal1 = ({setName ,setNum ,handleCallbackSubmit}) => {
  return (
  <>
    <div className="title">
          <h1>Request a Call Back</h1>
        </div>
        <div className="body">
          <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
          <input type="text" placeholder="Enter Phone Number"  onChange={(e)=>setNum(e.target.value)}/>
        </div>
        <div className="footer">
          <button onClick={handleCallbackSubmit} id="callbackBtn">
            Request a Call Back
          </button>
    </div>
    </>
  )
}

export default Modal1
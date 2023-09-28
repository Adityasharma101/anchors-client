import React, { useState } from "react";
import { IoCall } from "react-icons/io5";

import "./Callback.scss";
import Modal from "../Modal/Modal";
const Callback = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
      <div>
        <div
        className="callback "
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <div className="call_icon">
          <IoCall />
        </div>
        <div className="callback_text">
          <p>Request for a call back</p>
        </div>
      </div>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
      </div>

  );
};

export default Callback;

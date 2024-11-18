import React from "react";
import Button from "../components/Button";

function Modal({ isVisible, onClose, children }) {
  if (!isVisible) {
    return null;
  }

  const parentClose = (e) => {
    if (e.target.id === "parent") {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="parent"
      onClick={parentClose}
    >
      <div className="w-[600px] flex flex-col ">
        <Button
          btnClass={"text-white place-self-end text-xl"}
          text={"X"}
          onClick={() => onClose()}
        />
        <div className="bg-white p-2 rounded">{children}</div>
      </div>
    </div>
  );
}

export default Modal;

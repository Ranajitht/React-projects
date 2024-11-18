import React, { useRef } from "react";
import Button from "./Button";

export default function PopupComponent({ onClose }) {

const popupRef = useRef()

const closePopup = (e) => {
popupRef.current === e.target && onClose()
}

  return (
    <div ref={popupRef} onClick={closePopup} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center ">
      <div className="mt-10 flex flex-col gap-5 text-white">
        <Button
          text={"x"}
          btnClass={"text-5xl place-self-end"}
          onClick={onClose}
        />
        <div className="bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
          <h3 className="text-3xl font-extrabold">Download free Ebook</h3>
          <p className="text-3xl text-center font-bold max-w-md">
            Want to learn how to crack web development like a pro?
          </p>
          <form action="">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
            />
            
            <Button
              text={"Download the ebook"}
              btnClass={
                "mt-4 w-full flex items-center justify-center px-5 py-3 font-medium bg-black"
              }
            />
          </form>
        </div>
      </div>
    </div>
  );
}

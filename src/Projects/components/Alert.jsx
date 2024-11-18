import React, { useEffect } from "react";
import { useState } from "react";
import Button from "./Button";

function Alert({ type, message, delay = false, delayTime=  5000 }) {
  const [showAlert, setShowAlert] = useState(true);


  const closeAlert = (e) => {
    e.target.parentElement.parentElement.classList.add("hidden")

    setTimeout(() => {
      setShowAlert(false);
    }, delayTime);

  };

  useEffect(() => {
    delay &&
      setTimeout(() => {
        setShowAlert(false);
      }, delayTime);
  });

  return (
    showAlert && (
      <div className={`${type}`}>
        <div className="">
          <span className="self-start mr-80">{message}</span>
          <Button
            btnClass={"self-end hover:text-red-500 "}
            text="X"
            onClick={closeAlert}
          />
        </div>
      </div>
    )
  );
}

export default Alert;

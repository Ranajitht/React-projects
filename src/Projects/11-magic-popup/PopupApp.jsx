import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import PopupComponent from "../components/PopupComponent";

export default function PopupApp() {
  const [showPopup, setShowPopup] = useState(false);
  const [timer, setTimer] = useState(false);
  const [text, setText] = useState("Click here or wait 5 seconds to download free ebook")

  useEffect(() => {
    setTimeout(() => {
      setTimer(true);
    }, 5000);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center gap-6 bg-[#14161b] text-white ">
      <h2 className="text-5xl font-bold mt-4">PopupApp</h2>
      <Button
        text={text}
        btnClass={"bg-purple-500 px-4 py-2 rounded-lg text-lg "}
        onClick={() => {
          setShowPopup(true);
        }}
      />
      {(timer || showPopup) &&
          <PopupComponent
            onClose={() => {(setShowPopup(false) || setTimer(false)); setText("Click here to download free ebook")} }
          />
        }
    </div>
  );
}

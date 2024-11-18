import React, { useState, useEffect } from "react";
import LockSlider from "./LockSlider";
import { AiFillUnlock } from "react-icons/ai";
import LockScreenImg from "./img/moon.jpg";
import HomeScreenImg from "./img/home.jpg";

function SlideToUnlock() {
  const [uiProps, setUiProps] = useState({
    uiText: "Unlock Screen",
    uiColor: "#eee",
    uiBg: `url(${LockScreenImg}) center/cover no-repeat`,
  });

  const [showLockSlider, setShowLockSlider] = useState(true);

  const [lockSliderValue, setLockSliderValue] = useState(0);

  const handleLockSliderInput = (e) => {
    setLockSliderValue(e.target.value);
  };

  const lockScreen = () => {
    setLockSliderValue(0);
    setShowLockSlider(true);
    setUiProps({
      uiText: "Unlock screen",
      uiColor: "#eee",
      uiBg: `url(${LockScreenImg}) center/cover no-repeat`,
    });
  };

  useEffect(() => {
    document.body.style.background = "#999";
    if (lockSliderValue === "100") {
      setShowLockSlider(false);
      setLockSliderValue(0);
      setUiProps({
        uiText: "Lock screen",
        uiColor: "#222",
        uiBg: `url(${HomeScreenImg}) center/cover no-repeat`,
      });
    }
  }, [lockSliderValue]);

  return (
    <div
      className="max-w-[900px] shadow-md my-0 mx-auto h-[80vh] flex-col mt-[15vh] w-[40vh] border-4 border-solid border-black text-center flex justify-center items-center"
      style={{ background: uiProps.uiBg }}
    >
      <h1
        className="text-6xl font-medium my-12 mx-0"
        style={{ color: uiProps.uiColor }}
      >
        {uiProps.uiText}
      </h1>
      {showLockSlider ? (
        <LockSlider
          width={"250px"}
          handleInput={handleLockSliderInput}
          value={lockSliderValue}
        />
      ) : (
        <AiFillUnlock className="unlockIcon" onClick={lockScreen} />
      )}
    </div>
  );
}

export default SlideToUnlock;

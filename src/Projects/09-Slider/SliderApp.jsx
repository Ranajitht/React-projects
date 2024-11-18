import React, { useState } from "react";
import SliderComp from "./SliderComp";
import Title from "../components/Title";

function SliderApp() {
  const [slideValue, setSlideValue] = useState(0);

  const handleSliderValueChange = (e) => {
    setSlideValue(e.target.value);
  };

  let bgColor;
  let textColor;

  if (slideValue <= 25) {
    bgColor = "red";
    textColor = "white";
  }

  if (slideValue > 25 && slideValue <= 50) {
    bgColor = "blue";
    textColor = "white";
  }

  if (slideValue >= 51) {
    bgColor = "green";
    textColor = "white";
  }

  if (slideValue > 75) {
    bgColor = "orange";
    textColor = "white";
  }
  if (slideValue == 100) {
    bgColor = "red";
  }

  return (
    <div className="text-center my-0 mx-auto max-w-[900px] flex flex-col items-center justify-center">
      <Title
        text={"Slide to grow"}
        setValue={slideValue}
        handleInput={handleSliderValueChange}
        bgColor={bgColor}
        textColor={textColor}
      />
      <SliderComp
        setValue={slideValue}
        handleInput={handleSliderValueChange}
        bgColor={bgColor}
        textColor={textColor}
      />
    </div>
  );
}

export default SliderApp;

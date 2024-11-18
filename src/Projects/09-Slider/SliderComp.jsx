import React from "react";

function SliderComp({ setValue, handleInput, bgColor, textColor }) {
  const sliderStyle = {
    appearance: "none",
    width: "100%",
    height: 25,
    background: !bgColor ? "lightgray" : bgColor,
    courser: "pointer",
    opacity: 0.7,
  };

  return (
    <div className="max-w-[900px] flex justify-center gap-[100px] items-center flex-col my-0 mx-auto">
      <input
        type="range"
        min="0"
        max={100}
        value={setValue}
        onInput={handleInput}
        style={sliderStyle}
      />
      <div
        style={{
          color: !textColor ? "black" : textColor,
          background: !bgColor ? "lightgray" : bgColor,
          height: `${setValue * 3}px`,
          width: `${setValue * 3}px`,
          fontWeight: 600,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
        }}
      >
        <span>{setValue}</span>
      </div>
    </div>
  );
}

export default SliderComp;

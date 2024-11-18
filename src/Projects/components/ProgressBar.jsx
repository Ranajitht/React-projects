import React from "react";

function ProgressBar({ completed, bgColor }) {
  const fillerStyle = {
    width: `${completed}%`,
  };

  return (
    <div className="h-[25px] bg-[#c0c0de] rounded-full m-[50px] ">
      <div
        className={`h-full rounded-full w-full ${bgColor} text-right transition-all duration-500 ease-in-out`}
        style={fillerStyle}
      >
        <span className="p-3 m-[10px] text-[#fff] font-bold ">
          {`${completed}%`}
        </span>
      </div>
    </div>
  );
}

export default ProgressBar;

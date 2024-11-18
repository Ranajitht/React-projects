import React from "react";
import Title from "../components/Title";

export default function RandomizeColor() {
  let handleClick = (e) => {
    console.log("click");
    console.log(getRandomColor());

    let body = document.querySelector("body");
    body.style.background = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
  };

  let getRandomColor = () => {
    let letters = "0123456789abcdef";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="text-center m-auto">
      <Title text={"Randomize color"} classes={"mb-4"} />
      <div className="flex justify-center">
        <button className="bg-red-600 text-white m-4" onClick={handleClick}>
          Click me
        </button>
        <button className="bg-green-500 text-white m-4" onClick={handleClick}>Click me</button>
        <button className="bg-purple-500 text-white m-4" onClick={handleClick}>Click me</button>
        <button className="bg-yellow-500 text-white m-4" onClick={handleClick}>Click me</button>
      </div>
    </div>
  );
}

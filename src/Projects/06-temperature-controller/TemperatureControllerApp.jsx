import React, { useState } from "react";
import Button from "../components/Button";

function TemperatureControllerApp() {
  const [temperature, setTemperature] = useState(0);

  const increaseTemperature = () => {
    setTemperature(temperature + 1);
  };

  const decreaseTemperature = () => {
    setTemperature(temperature - 1);
  };

  return (
    <div className="flex m-auto flex-col shadow-lg w-96 h-96 text-center items-center justify-center">
      <div
        className={`${
          temperature > 0 ? "bg-red-500" : "bg-blue-600"
        } flex flex-col items-center justify-center w-64 h-64 bg-yellow-500 rounded-full text-white text-center`}
      >
        <h1>Temperature °C</h1>

        <h2 className="text-5xl">{temperature}</h2>
      </div>

      <div className="mt-4 mb-4">
        <Button
          text="-"
          btnClass={"bg-black text-white font-semibold py-2 px-6 rounded"}
          onClick={decreaseTemperature}
        />

        <Button
          text="+"
          btnClass={
            "bg-red-600 text-white font-semibold ml-10 py-2 px-5 rounded"
          }
          onClick={increaseTemperature}
        />
      </div>
    </div>
  );
}

export default TemperatureControllerApp;

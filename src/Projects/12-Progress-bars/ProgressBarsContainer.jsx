import React, { useEffect, useRef, useState } from "react";
import Title from "../components/Title";
import ProgressBar from "../components/ProgressBar";

export default function ProgressBarsContainer() {
  const [completed, setCompleted] = useState(0);

  const [status, setStatus] = useState({
    ui: 74,
    ux: 33,
    data: 20,
  });

  const projectDate = [
    { bgColor: "bg-red-600", completed: status.ui },
    { bgColor: "bg-green-600", completed: status.ux },
    { bgColor: `bg-blue-600`, completed: status.data },
  ];

  const uiInput = useRef(null);

  

  useEffect(() => {
    uiInput.current.focus();
    setInterval(() => {
      setCompleted(Math.floor(Math.random() * 100) + 1);
    }, 3000);
  }, []);

  return (
    <div className="text-center flex place-self-auto justify-normal flex-col">
      <Title text={"Progress bars"} />
      <h2 className="text-3xl">ProgressBarsContainer</h2>
      <h3 className="text-2xl">Progress status:</h3>
      <ul className="p-10 flex flex-col gap-2 place-items-center">
        <li className="flex flex-col">
          UI status:{""}
          <input
            className="text-red-500"
            type="range"
            ref={uiInput}
            value={status.ui}
            onChange={(e) => setStatus({ ...status, ui: e.target.value })}
          />
        </li>
        <li className="flex flex-col">
          UX status:{" "}
          <input
            className= " text-green-700"
            type="range"
            value={status.ux}
            onChange={(e) => setStatus({ ...status, ux: e.target.value })}
          />
        </li>
        <li className="flex flex-col">
          DATA status:{" "}
          <input
            className=" text-blue-500 "
            type="range"
            value={status.data}
            onChange={(e) => setStatus({ ...status, data: e.target.value })}
          />
        </li>
      </ul>
      {projectDate.map((data, idx) => (
        <ProgressBar
          key={idx}
          bgColor={data.bgColor}
          completed={data.completed}
        />
      ))}
      <ProgressBar
        bgColor={completed > 50 ? "bg-purple-500" : "bg-yellow-400"}
        completed={completed}
      />
    </div>
  );
}

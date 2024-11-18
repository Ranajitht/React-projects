import React from "react";
import Alert from "../components/Alert";

function AlertApp() {
  return (
    <div className="text-center">
      AlertApp
      <Alert type={"bg-green-300"} message={"Successful login"} />
      <Alert type={"bg-slate-300"} message={"Time Triggered"} delay={true} /*delayTime={1000}*/ />
    </div>
  );
}

export default AlertApp;

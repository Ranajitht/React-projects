import React from "react";

function Button({ text = "click", btnClass, icon, onClick}) {
  return (
    <button
      className={`${btnClass}`}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
}

export default Button;

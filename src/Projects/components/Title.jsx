import React from "react";

function Title({ classes, text}) {
  return (
    <h1
      className={
        !classes
          ? "text-6xl font-medium my-16 mx-0 "
          : classes || "text-6xl font-medium my-16 mx-0 text-center"
      }
    
    >
      {!text ? "Title" : text}
    </h1>
  );
}

export default Title;

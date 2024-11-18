 import React from "react";

function NavItem({ text, active="" }) {
  return (
    <li>
      <a href="#" className={`${active}`}>
        {text}
      </a>
    </li>
  );
}

export default NavItem; 

// src/App.js

import React, { useState } from 'react';

const ToggleButton = () => {
  // State to track the button's active status
  const [isActive, setIsActive] = useState(false);

  // Function to toggle the active state
  const toggleActive = () => {
    setIsActive(prev => !prev);
  };

  return (
    <button
      onClick={toggleActive}
      className={`p-2 rounded transition duration-300 ${
        isActive ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
      }`}
    >
      {isActive ? 'Active' : 'Inactive'}
    </button>
  );
};

export default ToggleButton;

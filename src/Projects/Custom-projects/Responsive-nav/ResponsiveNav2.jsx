// src/Navbar.js
import React, { useState } from 'react';


function ResponsiveNav2() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-lg font-bold">
              MyApp
            </a>
          </div>

          {/* Menu Items for Desktop */}
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
            <a href="#services" className="hover:text-gray-300">
              Services
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-white hover:text-gray-300"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden">
          <a href="#home" className="block px-4 py-2 hover:bg-blue-600">
            Home
          </a>
          <a href="#about" className="block px-4 py-2 hover:bg-blue-600">
            About
          </a>
          <a href="#services" className="block px-4 py-2 hover:bg-blue-600">
            Services
          </a>
          <a href="#contact" className="block px-4 py-2 hover:bg-blue-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default ResponsiveNav2;

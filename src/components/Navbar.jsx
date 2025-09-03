// src/components/Navbar.jsx (Updated for transparent background)
import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent py-4 px-6 flex justify-between items-center z-30">
      <div className="text-2xl font-bold text-white drop-shadow-md">
        Kamath Food Point
      </div>
      <ul className="flex space-x-6">
        <li>
          <a href="/" className="text-white hover:text-amber-200 transition-colors drop-shadow-md">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-white hover:text-amber-200 transition-colors drop-shadow-md">
            About Us
          </a>
        </li>
        <li>
          <a href="/services" className="text-white hover:text-amber-200 transition-colors drop-shadow-md">
            Services
          </a>
        </li>
        <li>
          <a href="/contact" className="text-white hover:text-amber-200 transition-colors drop-shadow-md">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

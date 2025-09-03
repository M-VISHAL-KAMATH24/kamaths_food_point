// Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-800">
        Kamath Food Point
      </div>
      <ul className="flex space-x-6">
        <li>
          <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About Us
          </a>
        </li>
        <li>
          <a href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
            Services
          </a>
        </li>
        <li>
          <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

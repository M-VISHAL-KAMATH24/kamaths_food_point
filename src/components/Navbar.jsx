import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-amber-500 to-amber-300 shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-white">
        Kamath Food Point
      </div>
      <ul className="flex space-x-6">
        <li>
          <a href="/" className="text-white hover:text-amber-100 transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-white hover:text-amber-100 transition-colors">
            About Us
          </a>
        </li>
        <li>
          <a href="/services" className="text-white hover:text-amber-100 transition-colors">
            Services
          </a>
        </li>
        <li>
          <a href="/contact" className="text-white hover:text-amber-100 transition-colors">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

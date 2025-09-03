// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 px-2 md:px-10 bg-gradient-to-b from-amber-200 via-amber-300 to-orange-300 text-orange-800">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Brand Section */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-orange-700 mb-2">Kamath Food Point</h3>
          <p className="text-sm text-orange-600">Authentic flavors, warm vibes, and great service.</p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h4 className="text-lg font-semibold text-orange-700 mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-orange-900 transition">Home</a></li>
            <li><a href="/about" className="hover:text-orange-900 transition">About Us</a></li>
            <li><a href="/services" className="hover:text-orange-900 transition">Services</a></li>
            <li><a href="/contact" className="hover:text-orange-900 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social & Copyright */}
        <div className="text-center md:text-right">
          <div className="flex justify-center md:justify-end space-x-4 mb-4">
            <a href="https://facebook.com" className="text-orange-600 hover:text-orange-800">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.297c0-.952.374-1.703 1.926-1.703h2.074v-3.703c-.36-.05-1.636-.097-3.11-.097-3.085 0-5.19 1.882-5.19 5.333v2.767h-3.5v4h3.5v12h4.3v-12h-3z"/></svg>
            </a>
            <a href="https://instagram.com" className="text-orange-600 hover:text-orange-800">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.327.069 2.871.069 7.227.069 8.513.055 8.924.072 10.204.327 14.562 2.871 20.189 7.227 20.189c1.28.017 1.691.003 2.977.003 1.286 0 1.697.014 2.977-.003 4.356 0 6.9-2.627 7.155-6.985.017-1.28.003-1.691.003-2.977s.014-1.697-.003-2.977C20.189 2.871 17.562.327 13.204.072 11.924.055 11.513.069 10.227.069 8.941.069 8.53.055 7.25.072 2.894.327.269 2.871.014 7.227-.003 8.507.011 8.918.011 10.204s-.014 1.697.003 2.977c.255 4.358 2.899 6.985 7.257 6.985 1.28.017 1.691.003 2.977.003 1.286 0 1.697.014 2.977-.003 4.358 0 6.985-2.627 7.24-6.985.017-1.28.003-1.691.003-2.977s.014-1.697-.003-2.977c-.255-4.356-2.882-6.9-7.24-7.155-1.28-.017-1.691-.003-2.977-.003zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" /></svg>
            </a>
            <a href="https://twitter.com" className="text-orange-600 hover:text-orange-800">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.415-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" /></svg>
            </a>
          </div>
          <p className="text-sm text-orange-600">
            © 2025 Kamath Food Point. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// src/components/Contact.jsx
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const response = await fetch("https://formspree.io/f/xyzddrnq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      setStatus("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Error. Try again.");
    }
  };

  return (
    <section className="py-20 px-2 md:px-10 bg-gradient-to-b from-amber-200 via-amber-300 to-orange-300 min-h-[80vh]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-orange-800">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div className="bg-orange-50 rounded-xl shadow-md p-7 flex flex-col justify-center text-left">
            <div className="mb-5">
              <span className="block text-lg font-bold text-orange-600 mb-1">Email</span>
              <a
                href="mailto:kamathfoodpoint@gmail.com"
                className="block text-base text-gray-800 underline"
              >
                kamathfoodpoint@gmail.com
              </a>
            </div>
            <div className="mb-5">
              <span className="block text-lg font-bold text-orange-600 mb-1">Phone</span>
              <span className="block text-base text-gray-800">
                +91 73386 52655
              </span>
            </div>
            <div className="mb-5">
              <span className="block text-lg font-bold text-orange-600 mb-1">Address</span>
              <span className="block text-base text-gray-800">
                Kamath Food Point, Main Road, Your City
              </span>
            </div>
            <div>
              <span className="block text-lg font-bold text-orange-600 mb-1">Instagram</span>
              <a
                href="https://instagram.com/kamathfoodpoint"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base text-gray-800 underline"
              >
                instagram.com/kamathfoodpoint
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-xl shadow-md p-7 h-fit">
            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-orange-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  autoComplete="off"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md border-orange-300 bg-white text-gray-900 focus:outline-none focus:ring focus:ring-orange-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-orange-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  autoComplete="off"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md border-orange-300 bg-white text-gray-900 focus:outline-none focus:ring focus:ring-orange-400"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-orange-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md border-orange-300 bg-white text-gray-900 focus:outline-none focus:ring focus:ring-orange-400"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md transition"
              >
                Send Message
              </button>
              {status && (
                <p className="text-sm text-center mt-2 text-orange-700">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

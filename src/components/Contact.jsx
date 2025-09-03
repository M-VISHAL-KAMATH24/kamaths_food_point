// src/components/Contact.jsx
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => {
        tl.from(headingRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.7,
        })
          .from(infoRef.current, {
            x: -50,
            opacity: 0,
            duration: 0.7,
          }, "-=0.5")
          .from(formRef.current, {
            x: 50,
            opacity: 0,
            duration: 0.7,
          }, "-=0.5");
      },
      once: true,
    });
  }, []);

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
    <section
      ref={sectionRef}
      className="py-20 px-2 md:px-10 bg-gradient-to-b from-amber-200 via-amber-300 to-orange-300 min-h-[80vh]"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          ref={headingRef}
          className="text-4xl font-bold mb-10 text-center text-orange-800"
        >
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div
            ref={infoRef}
            className="bg-orange-50/90 rounded-xl shadow-md p-7 h-fit flex flex-col justify-center"
          >
            <div className="mb-4">
              <span className="block text-lg font-bold text-orange-600">Email</span>
              <span className="block text-base text-gray-700">
                kamathfoodpoint@gmail.com
              </span>
            </div>
            <div className="mb-4">
              <span className="block text-lg font-bold text-orange-600">Phone</span>
              <span className="block text-base text-gray-700">
                +91 73386 52655
              </span>
            </div>
            <div className="mb-4">
              <span className="block text-lg font-bold text-orange-600">Address</span>
              <span className="block text-base text-gray-700">
                Kamath Food Point, Main Road, Your City
              </span>
            </div>
            <div className="mb-2">
              <span className="block text-lg font-bold text-orange-600">Instagram</span>
              <span className="block text-base text-gray-700">
                instagram.com/kamathfoodpoint
              </span>
            </div>
          </div>
          {/* Right: Form */}
          <div ref={formRef} className="bg-white/90 rounded-xl shadow-md p-7 h-fit">
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
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md border-orange-300 bg-white text-gray-900 focus:outline-none focus:ring focus:ring-orange-400"
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
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md border-orange-300 bg-white text-gray-900 focus:outline-none focus:ring focus:ring-orange-400"
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

// src/components/Hero.jsx (Updated and adapted for your cafe theme)
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    // Animate heading from bottom
    gsap.fromTo(
      headingRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: 'power3.out' }
    );

    // Animate subheading from bottom with slight delay and different duration
    gsap.fromTo(
      subheadingRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 2.2, delay: 1.5, ease: 'power3.out' }
    );

    // Optional: Animate icon fade-in
    gsap.fromTo(
      iconRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, delay: 2.5, ease: 'power3.out' }
    );
  }, []);

  // Function to scroll to next section (assume next section has id="next-section")
  const scrollToNext = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      gsap.to(window, { duration: 1, scrollTo: { y: nextSection, autoKill: false } });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="/videos/burger.mp4" // Corrected path for Vite public folder
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 ref={headingRef} className="text-5xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
          Welcome to Kamath Food Point
        </h1>
        <p ref={subheadingRef} className="text-xl md:text-2xl font-light mb-8 drop-shadow-md">
          Indulge in authentic flavors, warm ambiance, and unforgettable dining experiences.
        </p>

        {/* Explore Icon (Chevron Down) - Centered below subheading */}
        <button
          ref={iconRef}
          onClick={scrollToNext}
          className="text-white text-4xl animate-bounce focus:outline-none"
          aria-label="Explore more"
        >
          ↓
        </button>
      </div>
    </section>
  );
};

export default Hero;

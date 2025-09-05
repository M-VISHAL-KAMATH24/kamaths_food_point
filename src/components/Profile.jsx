// src/components/Profile.jsx
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Profile = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Animate image: fade in with scale and slight rotation for cool effect
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8, rotation: -5 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate text: slide in from right with fade
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section className="py-20 px-4 md:px-10 bg-gradient-to-b from-white via-amber-100 to-amber-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image with GSAP animation */}
        <div ref={imageRef} className="flex justify-center md:justify-start">
          <img
            src="/images/profile.jpg" // Replace with your actual image path
            alt="Mr. Manjunath Kamath and Mrs. Divya Kamath"
            className="rounded-full shadow-lg w-100 h-100 object-cover border-4 border-amber-400"
          />
        </div>

        {/* Right: Text content with GSAP animation */}
        <div ref={textRef} className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold text-amber-800">Meet the Heart of Kamath Food Point</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Mr. Manjunath Kamath and his wife, Mrs. Divya Kamath, are the dedicated couple behind Kamath Food Point. With their shared passion for culinary excellence, they work hand-in-hand to bring authentic, delicious meals to your table every day.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            As a team, they focus on providing high-quality food at affordable prices, ensuring everyone can enjoy wholesome, flavorful dishes without breaking the bank. Their commitment to fresh ingredients and warm hospitality makes the cafe a beloved spot for families, students, and locals alike.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Together, the Kamaths create a welcoming atmosphere where every visit feels like coming home. Their story is one of love, hard work, and a deep dedication to serving the community with smiles and satisfying meals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;

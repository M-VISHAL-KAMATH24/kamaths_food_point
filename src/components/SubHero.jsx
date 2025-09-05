// src/components/SubHero.jsx
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SubHero = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.load(); // Ensure video is loaded

    // Get video duration once metadata is loaded
    video.onloadedmetadata = () => {
      const duration = video.duration;

      // ScrollTrigger to scrub video based on scroll position
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          // Calculate progress (0 to 1) and set video time
          video.currentTime = self.progress * duration;
        },
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-10 bg-gradient-to-b from-white via-amber-100 to-amber-200 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Video (scrubs with scroll, assuming video has transparent bg or styled to show only burger) */}
        <div className="relative flex justify-center md:justify-start">
          <video
            ref={videoRef}
            src="/videos/output2.mp4" // Your burger video path
            muted
            playsInline
            className="w-full max-w-md h-auto object-contain" // object-contain to show only content without black bg stretching
          />
        </div>

        {/* Right: Placeholder text (customize as needed) */}
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-4xl font-bold text-amber-800">Discover Our Specialties</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Indulge in our mouthwatering burgers, crafted with fresh ingredients and bursting with flavor. Scroll to explore more!
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            As you scroll down, watch the burger come to life – and scroll up to rewind the magic.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubHero;

// src/components/Info.jsx
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const leftCards = [
  {
    heading: "Best Cafe for Authentic Food",
    text: "Experience genuine South Indian flavors made with fresh, local ingredients every day."
  },
  {
    heading: "Students' Favorite Hangout",
    text: "Affordable prices and cozy ambiance make it the perfect spot for students to relax and study."
  },
  {
    heading: "Friendly and Quick Service",
    text: "Our staff ensures a warm welcome and speedy service, even during peak hours."
  },
  {
    heading: "Hygienic and Fresh Preparations",
    text: "We prioritize cleanliness and use only the freshest ingredients for healthy, delicious meals."
  }
];

const rightCards = [
  {
    heading: "Signature Dosas",
    text: "Crispy, golden dosas served with fresh chutneys and sambar – a must-try!"
  },
  {
    heading: "Exotic Chats",
    text: "Tangy and spicy street-style chats that bring the flavors of India to your table."
  },
  {
    heading: "Refreshing Juices",
    text: "Freshly squeezed juices from seasonal fruits, perfect for a healthy boost."
  },
  {
    heading: "Daily Specials",
    text: "Rotating menu items featuring local favorites and innovative twists."
  }
];

const shapeColors = [
  "bg-amber-200", "bg-amber-300", "bg-amber-100", "bg-amber-400", "bg-orange-200", "bg-orange-100"
];

const Info = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const shapeRefs = useRef([]);

  useEffect(() => {
    // Entrance animations for content (fixed, no scroll movement)
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(leftRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power3.out' });
        gsap.fromTo(rightRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 });
      },
      once: true
    });
    // Animate only shapes on scroll (light, overlay with low opacity for text visibility)
    shapeRefs.current.forEach((shape, idx) => {
      const direction = idx % 2 === 0 ? '100vw' : '-100vw';
      gsap.to(shape, {
        x: direction,
        duration: 4 + idx * 0.4,
        ease: 'linear',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-2 md:px-10 bg-gradient-to-b from-white via-amber-50 to-amber-100 overflow-hidden"
    >
      {/* Light Orange Animated Shapes (overlay above content with transparency) */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {[...Array(6)].map((_, idx) => (
          <div
            // Vary shape positions and sizes, responsive
            key={idx}
            ref={el => shapeRefs.current[idx] = el}
            className={`${shapeColors[idx]} opacity-20 rounded-full mix-blend-screen absolute`}
            style={{
              left: idx % 2 === 0 ? `${5 + idx * 10}%` : undefined,
              right: idx % 2 !== 0 ? `${5 + idx * 8}%` : undefined,
              top: `${5 + (idx * 10)}%`,
              width: `${50 + idx * 15}px`,
              height: `${50 + idx * 15}px`,
              transform: idx % 2 === 0 ? 'translateX(-100vw)' : 'translateX(100vw)'
            }}
          />
        ))}
      </div>

      {/* Main Grid Content, z-10 so shapes overlay but text is readable */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Why Trust Kamaths */}
          <div ref={leftRef}>
            <h2 className="text-4xl font-bold text-orange-700 mb-8 text-center md:text-left">Why Trust Kamaths?</h2>
            <div className="flex flex-col gap-6">
              {leftCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 min-h-[120px] flex flex-col justify-center border border-orange-300 rounded-xl shadow-lg px-6 py-4"
                >
                  <h3 className="text-2xl font-bold text-orange-600 mb-1">{card.heading}</h3>
                  <p className="text-gray-700">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Our Specialties */}
          <div ref={rightRef}>
            <h2 className="text-4xl font-bold text-orange-700 mb-8 text-center md:text-left">Our Specialties</h2>
            <div className="flex flex-col gap-6">
              {rightCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 min-h-[120px] flex flex-col justify-center border border-orange-300 rounded-xl shadow-lg px-6 py-4"
                >
                  <h3 className="text-2xl font-bold text-orange-600 mb-1">{card.heading}</h3>
                  <p className="text-gray-700">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;

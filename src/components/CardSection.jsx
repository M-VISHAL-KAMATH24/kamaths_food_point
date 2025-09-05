// src/components/CardSection.jsx
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    image: "images/breakfast.jpg",
    title: "Breakfast",
    description: "Start your day with our delicious breakfast options—tasty dosas, fluffy idlis & more.",
  },
  {
    image: "images/chats.jpg",
    title: "Chats",
    description: "Relish the flavors of India with our mouthwatering street snacks: pani puri, bhel & more.",
  },
  {
    image: "images/freshjuice.jpg",
    title: "Fresh Juices",
    description: "Enjoy refreshing, healthy juices made from handpicked fresh fruits.",
  }
];

const CardSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Trigger animations only when section enters viewport
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%', // Start when top of section hits 80% of viewport
      onEnter: () => {
        // Animate heading
        gsap.fromTo(
          headingRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        );

        // Animate cards with stagger
        gsap.fromTo(
          cardRefs.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            delay: 0.5
          }
        );
      },
      once: true // Run only once
    });

    // Mouse interaction (unchanged, runs independently)
    cardRefs.current.forEach((card) => {
      if (!card) return;

      const onMouseMove = (e) => {
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = ((e.clientX - left) - width / 2) / 8;
        const y = ((e.clientY - top) - height / 2) / 8;
        gsap.to(card, {
          rotateY: x,
          rotateX: -y,
          scale: 1.05,
          transformPerspective: 800,
          ease: "power2.out",
          duration: 0.2
        });
      };

      const onMouseLeave = () => {
        gsap.to(card, {
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          ease: "power2.out",
          duration: 0.4
        });
      };

      card.addEventListener('mousemove', onMouseMove);
      card.addEventListener('mouseleave', onMouseLeave);
      return () => {
        card.removeEventListener('mousemove', onMouseMove);
        card.removeEventListener('mouseleave', onMouseLeave);
      };
    });
  }, []);

  return (
    <section ref={sectionRef} id="next-section" className="py-20 px-4 bg-gradient-to-b from-white via-amber-100/80 to-amber-200/90">
      <div className="max-w-7xl mx-auto">
        <h2 ref={headingRef} className="text-5xl font-bold text-amber-800 text-center mb-12 tracking-wide drop-shadow-lg">
          What We Provide
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          {cardsData.map((card, idx) => (
            <div
              key={card.title}
              ref={el => cardRefs.current[idx] = el}
              className="card bg-white/90 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden w-full md:w-80 transform-gpu transition-all duration-300 border border-amber-300 hover:shadow-amber-500"
              style={{ perspective: 1200 }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-600 mb-2">{card.title}</h3>
                <p className="text-gray-700">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;

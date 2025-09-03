import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, SplitText);

// Assuming you have a Navbar component - import it here
import Navbar from './components/Navbar'; // Adjust the path as needed

const App = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    // Simple GSAP animation example using SplitText for the welcome title
    const split = new SplitText(titleRef.current, { type: 'chars' });
    gsap.from(split.chars, {
      opacity: 0,
      y: 20,
      stagger: 0.05,
      duration: 0.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10 text-center">
        <h1 ref={titleRef} className="text-4xl font-bold text-gray-800">
          Welcome to the Website
        </h1>
        {/* Add more content or sections here as needed */}
      </div>
    </div>
  );
};

export default App;

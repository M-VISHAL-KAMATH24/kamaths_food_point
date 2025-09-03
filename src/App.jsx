import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, SplitText);

// Assuming you have a Navbar component - import it here
import Navbar from './components/Navbar'; // Adjust the path as needed
import Hero from './components/Hero';
import CardSection from './components/CardSection';
import Info from './components/Info';
import Contact from './components/Contact';

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
      <Hero/>
      <CardSection/>
      <Info/>
      <Contact/>
      
        {/* Add more content or sections here as needed */}
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import './Secondhero.css'
const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
      }`}
    >
      <span className=" relative top-3 text-lg text-gray-800 font-bold tracking-wider font-Anton">SCROLL DOWN TO KNOW MORE</span>
      <div className="w-[5px] h-10 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black animate-scrollDown" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
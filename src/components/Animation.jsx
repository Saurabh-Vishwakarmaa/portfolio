import React, { useState, useEffect } from 'react';
import './TypeWriter.css';

const Typewriter = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Web Developer', 'Android App Developer'];
  
  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        } else {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  return (
    <div className="typewriter">
      <div className="typewriter-text">
        I'm a <span>{displayText}</span>
        <span className="cursor">|</span>
      </div>
    </div>
  );
};

export default Typewriter;
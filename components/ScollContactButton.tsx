"use client";

import React from 'react';
interface CardProps {
  
  name: string;
  section : string
  
}
const ScrollContactButton : React.FC<CardProps> = ( {name , section} ) => {
    const mysection = section
    const scrollToContact = () => {
        const section = document.getElementById(mysection);
        
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = sectionTop - 60;
    
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
          
        }
        else{
          
        }
      };

  return (
    <button className="button-border" onClick={scrollToContact}>
              {name} 
            </button>
  );
};

export default ScrollContactButton;
"use client";

import React from 'react';

const ScrollContactButton = () => {
    const scrollToContact = () => {
        const section = document.getElementById('contact-section');
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = sectionTop - 60;
    
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      };

  return (
    <button className="button-border" onClick={scrollToContact}>
              Contact
            </button>
  );
};

export default ScrollContactButton;
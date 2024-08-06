"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import english_logo from "@/logos/logo.png";
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
// Assuming these SVGs are being used directly in the code
import MySVG from '@/logos/menu.svg';
import MyCloseSVG from '@/logos/close.svg';

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedLang, setSelectedLang] = useState('EN');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Set initial language based on current path
  useEffect(() => {
    if (pathname.startsWith('/ar')) {
      setSelectedLang('AR');
    } else {
      setSelectedLang('EN');
    }
  }, [pathname]);

  const handleLanguageChange = (lang: string) => {
    setSelectedLang(lang);
    router.push(`/${lang.toLowerCase()}`);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleButtonClick = () => {
    // Your button click handler logic
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`bg-white justify-between items-center p-4 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''} fixed w-full top-0 left-0 z-50 hidden md:flex`}>
        <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Image src={english_logo} alt="Highend logo" height={65} width={50} />
          <div className="flex flex-col ml-2">
            <p className="text-xl p-0 m-0 text-my_blue leading-none">HIGH END</p>
            <p className="text-sm p-0 m-0 text-my_gray leading-none">General Trading</p>
          </div>
        </div>
        <div className="flex justify-center items-center text-my_blue gap-8 h-full">
          <Link href="/markets" className="text-my_blue font-semibold hover:bg-my_blue hover:text-my_gold hover:scale-1.1 px-6 py-4">Markets</Link>
          <Link href="/service" className="text_my_blue font-semibold hover:bg-my_blue hover:text-my_gold hover:scale-1.1 px-6 py-4">Services</Link>
          <Link href="/en/about" className="text_my_blue font-semibold hover:bg-my_blue hover:text-my_gold hover:scale-1.1 px-6 py-4">About</Link>
        </div>
        <div className="flex items-center w-25 h-8 gap-0.5">
          <button
            className={`button-18 ${selectedLang === 'EN' ? 'selected' : ''}`}
            onClick={() => handleLanguageChange('EN')}
          >
            EN
          </button>
          <button
            className={`button-18 button-switch ${selectedLang === 'AR' ? 'selected' : ''}`}
            onClick={() => handleLanguageChange('AR')}
          >
            AR
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`bg-white justify-between items-center p-4 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''} fixed w-full top-0 left-0 z-50 flex md:hidden`}>
        <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Link href="/">
            <Image src={english_logo} alt="Highend logo" height={86} width={65} />
          </Link>
        </div>
        <div onClick={() => { setIsClicked(prevState => !prevState); handleMenuToggle(); }}>
          <Image src={isClicked ? MyCloseSVG : MySVG} alt="Menu Icon" className={`menu-mobile-only ${isClicked ? 'clicked' : ''} w-[39px]`} />
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="burger-menu"
              initial={{ opacity: 0, x: '100%' }} // Slide in from the right
              animate={{ opacity: 1, x: 0 }} // Slide to the center
              exit={{ opacity: 0, x: '100%' }} // Slide out to the right
              transition={{ duration: 0.3 }}
            >
              <div className="items-end" onClick={() => { setIsClicked(prevState => !prevState); handleMenuToggle(); }}>
                <Image src={MyCloseSVG} alt="Close Icon" className={`menu-mobile-only-close ${isClicked ? 'clicked' : ''} w-[39px] h-[50px] mt-10 ml-40`} />
              </div>
              <Link href="/markets" className="text-my_blue font-semibold ">Markets</Link>
              <Link href="/service" className="text_my_blue font-semibold">Services</Link>
              <Link href="/about" className="text_my_blue font-semibold ">About</Link>
       
      
            <button
            className={`button-18 ${selectedLang === 'EN' ? 'selected' : ''} button-mobile`}
            onClick={() => handleLanguageChange('EN')}
          >
            EN
          </button>
          <button
            className={`button-18 button-switch ${selectedLang === 'AR' ? 'selected' : ''} button-mobile`}
            onClick={() => handleLanguageChange('AR')}
          >
            AR
          </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default NavBar;

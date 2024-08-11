'use client';

import React from 'react';
import Image from 'next/image';
import backgroundImg from '@/images/background.png';
import cardImage1 from '@/images/card1.png';
import cardImage2 from '@/images/card2.png';
import Link from 'next/link';
import ScrollButton from '@/components/ScrollButton';
import Card from '../../components/Card';
import contactImage from '@/images/contact_image.png';
import ellipse from '@/logos/ellipse.svg';
import ContactCard from '@/components/ContactCard';
import experienceLogo from '@/logos/experience.svg';
import ScrollContactButton from '@/components/ScollContactButton';
import BG1 from "@/images/mobile-bg.png"

import ContactImageMobile from '@/images/contact-image2.png'
import ellipsesmall from '@/logos/small-ellipse.svg'


const Home = () => {
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
    <div>
      {/**Desktop version of first secion */}
      <div className="relative flex items-center pt-16 hidden md:flex" style={{ height: 'auto' }}>
        <Image
          src={backgroundImg}
          alt="Background Image"
          className="z-0 object-cover w-full"
        />
        <div className="absolute left-8 md:left-16 z-10 p-8 md:p-16 space-y-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-md" style={{ lineHeight: '4rem' }}>
            High Quality General Trading
          </h1>
          <p className="text-lg md:text-xl font-medium text-white max-w-xl">
            UAE-based premier trading company specializing in importing high-quality products from around the world.
          </p>
          <div className="flex space-x-4">
            <Link href="/services" legacyBehavior>
              <a className="button-filled">Our Services</a>
            </Link>
            <ScrollContactButton />
          </div>
        </div>
        <ScrollButton />
      </div>
      
      {/* Mobile version */}
      <div className="relative flex items-center pt-16 md:hidden" style={{ height: 'auto' }}>
        <Image
          src={BG1}
          alt="Background Image"
          className="z-0 object-cover w-full"
        />
        <div className="absolute items-center z-10 p-8 space-y-6">
          <h1 className="text-3xl text-center font-semibold text-white max-w-md" style={{ lineHeight: '3rem' }}>
            High Quality General Trading
          </h1>
          <p className="text-md text-center font-semibold text-white max-w-xl">
            UAE-based premier trading company specializing in importing high-quality products from around the world.
          </p>
          <div className="flex space-x-8 items-center justify-center">
            <Link href="#services" legacyBehavior>
              <a className="button-filled w-[125px] h-[47px] text-[12px] font-semibold">Our Services</a>
            </Link>
            <ScrollContactButton />
          </div>
        </div>
      </div>
      

      {/** Desktop version Services Section */}
      <div id="services" className="md:flex hidden flex-col items-center justify-center h-auto bg-white py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">The UAE’s leading trading platform</h2>
        <p className="text-base md:text-lg font-medium text-gray-700 max-w-4xl text-center mb-10">
          Our mission is to deliver quality products from global markets to local retailers, fostering strong business relationships and contributing to the economic growth of the UAE.
        </p>
        <button className="button-custom mb-10">Get Started</button>
        <div className="flex justify-center gap-2 w-full">
          <Card imageSrc={cardImage1} text="International imports" content='Importing a diverse range of products from international markets.'/>
          <Card imageSrc={cardImage2} text="Product distribution" content='Efficiently managing and distributing these products to retailers across the UAE.'/>
          <Card imageSrc={cardImage1} text="Retail delivery" content='Providing reliable and timely delivery to meet the demands of our retail partners.'/>
        </div>
        {/**mobile version services section */}
      </div>
      <div id="services-section" className="relative flex flex-col items-center  h-auto bg-white py-16 space-y-11 md:hidden">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mt-0 pt-0 absolute top-0">The UAE’s leading trading platform</h2>
        <p className="text-base  font-medium text-gray-700 max-w-[350px] text-center ">
          Our mission is to deliver quality products from global markets to local retailers, fostering strong business relationships and contributing to the economic growth of the UAE.
        </p>
        <button className="button-custom mb-10">Get Started</button>
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <Card imageSrc={cardImage1} text="International imports" content='Importing a diverse range of products from international markets.'/>
          <Card imageSrc={cardImage2} text="Product distribution" content='Efficiently managing and distributing these products to retailers across the UAE.' />
          <Card imageSrc={cardImage1} text="Retail delivery" content='Providing reliable and timely delivery to meet the demands of our retail partners.'/>
        </div>
      </div>
      {/** Contact Us Section */}
      <div id="contact-section" className='relative my-8 hidden md:flex'>
        <div className="relative w-full h-[120vh] overflow-hidden">
          <Image
            className="absolute inset-0 w-full h-full object-cover object-top"
            src={contactImage}
            alt="Background image"
            style={{ transform: 'translateY(-10%)' }}
          />
        </div>
        <Image src={ellipse} alt="Ellipse" className="absolute top-0 right-0 w-[79%] h-[90%] object-cover z-2" />
        <div className="absolute inset-0 flex justify-between items-start p-16">
          <div className="w-2/5">
            <ContactCard />
          </div>
          <div className="w-[45%] text-white pt-48">
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ lineHeight: '4rem' }}>Reliable and committed to excellence</h2>
            <p className="text-lg md:text-lg font-medium w-[85%] mb-12">
              We aim to bridge the gap between global suppliers and local retailers, ensuring a seamless supply chain and the availability of top-notch products in the market.
            </p>
            <div className="flex justify-start items-center">
              <div className="relative flex items-center justify-center w-36 h-36">
                <div className="flex items-center justify-center w-36 h-36 rounded-full bg-[#D2A517]">
                  <div className="w-28 h-28 rounded-full bg-[#2A317A] flex items-center justify-center">
                    <Image src={experienceLogo} alt="Experience logo" width={75} height={75} />
                  </div>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-3xl font-bold mb-2">10+ years</p>
                <p className="text-md font-medium w-[60%]">of Experience in the trading Industry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** mobile version */}
      <div id="contact-section" className='relative my-8 md:hidden'>
      <div className="relative w-full h-[1014px] overflow-hidden">
        <Image
          className="absolute inset-0 w-full h-full object-cover object-top"
          src={ContactImageMobile}
          alt="Background image"
          style={{ transform: 'translateY(-10%)' }}
        />
        <Image
          src={ellipsesmall}
          className="absolute top-0 left-0 w-full h-3/5 object-cover z-1"
          alt="Ellipse overlay"
        />
      </div>
      <div className="absolute top-20 flex flex-col justify-center items-center z-10">
        <div className="w-4/5 text-white  text-center">
          <h2 className="text-2xl font-bold" style={{ lineHeight: '4rem' }}>
            Reliable and committed to excellence
          </h2>
          <p className="text-md font-medium w-full mb-12">
            We aim to bridge the gap between global suppliers and local retailers, ensuring a seamless supply chain and the availability of top-notch products in the market.
          </p>
        </div>
        <div className="w-4/5">
          <ContactCard />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;

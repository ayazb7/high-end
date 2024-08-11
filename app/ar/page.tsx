"use client";

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
import arabic_background from "@/images/arabic_background.png"

import BG1 from "@/images/mobile-bg.png";
import ContactImageMobile from '@/images/contact-image2.png';
import ellipsesmall from '@/logos/small-ellipse.svg';
import ScrollContactButton from '@/components/ScollContactButton';
import ArContactCard from '@/components/ArContactCard';

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
    <div dir="rtl">
      {/* Desktop version of first section */}
      <div className="relative  items-center pt-16 hidden md:flex" style={{ height: 'auto' }}>
        <Image
          src={arabic_background}
          alt="صورة خلفية"
          className="z-0 object-cover w-full"
        />
        <div className="absolute right-8 md:right-16 z-10 p-8 md:p-16 space-y-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-md text-right" style={{ lineHeight: '4rem' }}>
          الجودة العالية للتجارة العامة      
          </h1>
          <p className="text-lg md:text-xl font-medium text-white max-w-xl text-right">
            شركة تجارية رائدة مقرها الإمارات العربية المتحدة متخصصة في استيراد المنتجات عالية الجودة من جميع أنحاء العالم.
          </p>
          <div className="flex gap-10 justify-start">
            <Link href="/services" legacyBehavior>
              <a className="button-filled">خدماتنا</a>
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
          alt="صورة خلفية"
          className="z-0 object-cover w-full"
        />
        <div className="absolute items-center z-10 p-8 space-y-6">
          <h1 className="text-3xl text-center font-semibold text-white max-w-md" style={{ lineHeight: '3rem' }}>
            تجارة عامة عالية الجودة
          </h1>
          <p className="text-md text-center font-semibold text-white max-w-xl">
            شركة تجارية رائدة مقرها الإمارات العربية المتحدة متخصصة في استيراد المنتجات عالية الجودة من جميع أنحاء العالم.
          </p>
          <div className="flex gap-6 items-center justify-center">
            <Link href="/services" legacyBehavior>
              <a className="button-filled w-[125px] h-[47px] text-[18px] pr-9 font-semibold">خدماتنا</a>
            </Link>
            <ScrollContactButton/>
          </div>
        </div>
      </div>
      
      {/* Desktop version Services Section */}
      <div id="services-section" className="md:flex hidden flex-col items-center justify-center h-auto bg-white py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-right">منصة التجارة الرائدة في الإمارات</h2>
        <p className="text-base md:text-lg font-medium text-gray-700 max-w-4xl text-center mb-10">
          مهمتنا هي توفير منتجات عالية الجودة من الأسواق العالمية إلى تجار التجزئة المحليين، وتعزيز العلاقات التجارية القوية والمساهمة في النمو الاقتصادي لدولة الإمارات.
        </p>
        <button className="button-custom mb-10">ابدأ الآن</button>
        <div className="flex justify-center gap-2 w-full">
          <Card imageSrc={cardImage1} text="واردات دولية" content='استيراد مجموعة متنوعة من المنتجات من الأسواق الدولية' />
          <Card imageSrc={cardImage2} text="توزيع المنتجات" content='إدارة وتوزيع هذه المنتجات بكفاءة على تجار التجزئة في جميع أنحاء الإمارات العربية المتحدة'/>
          <Card imageSrc={cardImage1} text="توصيل التجزئة" content='توفير تسليم موثوق وفي الوقت المناسب لتلبية احتياجات شركائنا من تجار التجزئة'/>
        </div>
      </div>

      {/* Mobile version Services Section */}
      <div id="services-section" className="relative flex flex-col items-center h-auto bg-white py-16 space-y-11 md:hidden">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">منصة التجارة الرائدة في الإمارات</h2>
        <p className="text-base font-medium text-gray-700 max-w-[350px] text-center">
          مهمتنا هي توفير منتجات عالية الجودة من الأسواق العالمية إلى تجار التجزئة المحليين، وتعزيز العلاقات التجارية القوية والمساهمة في النمو الاقتصادي لدولة الإمارات.
        </p>
        <button className="button-custom mb-10">ابدأ الآن</button>
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <Card imageSrc={cardImage1} text="واردات دولية" content='استيراد مجموعة متنوعة من المنتجات من الأسواق الدولية'/>
          <Card imageSrc={cardImage2} text="توزيع المنتجات" content='إدارة وتوزيع هذه المنتجات بكفاءة على تجار التجزئة في جميع أنحاء الإمارات العربية المتحدة'/>
          <Card imageSrc={cardImage1} text="توصيل التجزئة" content='توفير تسليم موثوق وفي الوقت المناسب لتلبية احتياجات شركائنا من تجار التجزئة'/>
        </div>
      </div>

      {/* Desktop version Contact Section */}
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
          <div className="w-4/5">
            <ArContactCard />
          </div>
          <div className="absolute w-[45%] text-white pt-48 right-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ lineHeight: '4rem' }}>موثوقة وملتزمة بالتميز</h2>
            <p className="text-lg md:text-lg font-medium w-[85%] mb-12">
            نحن نهدف إلى سد الفجوة بين الموردين العالميين وتجار التجزئة المحليين، مما يضمن سلسلة توريد سلسة وتوافر منتجات من الدرجة الأولى في السوق.
            </p>
            <div className="flex justify-start items-center gap-5">
              <div className="relative flex items-center justify-center w-36 h-36">
                <div className="flex items-center justify-center w-36 h-36 rounded-full bg-[#D2A517]">
                  <div className="w-28 h-28 rounded-full bg-[#2A317A] flex items-center justify-center">
                    <Image src={experienceLogo} alt="Experience logo" width={75} height={75} />
                  </div>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-3xl font-bold mb-2">خبراء  التجارة</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version Contact Section */}
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
          موثوقة وملتزمة بالتميز
          </h2>
          <p className="text-md font-medium w-full mb-12">
          نحن نهدف إلى سد الفجوة بين الموردين العالميين وتجار التجزئة المحليين، مما يضمن سلسلة توريد سلسة وتوافر منتجات من الدرجة الأولى في السوق.
          </p>
        </div>
        <div className="w-4/5">
          <ArContactCard />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;

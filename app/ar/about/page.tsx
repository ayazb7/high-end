'use client'
import Image from '@/node_modules/next/image'
import React from 'react'
import BgImage from '@/images/AboutusBg6.png'
import rectangle from '@/images/aboutBg9.png'
import mission from '@/logos/mission.svg'
import vision from '@/logos/vision.svg'
import future from '@/logos/future.svg'
import MobBG from '@/images/AboutMob1.png'

const page = () => {
  return (
      <div style={{ height: 'auto' }}>
        <div className="relative items-center hidden md:flex justify-between pt-20 mb-10" style={{ height: 'auto' }}>
            <Image 
                src={BgImage} 
                alt="صورة عنا" 
                className="w-[100%] object-fill z-0" 
            />
            <Image 
                src={rectangle} 
                alt="استمرار الخلفية" 
                className= "absolute top-12 z-10" 
            />
              <div className='absolute left-10 top-48 z-20 space-y-3'>
                  <h1 className='text-white font-bold text-3xl'>حول هاي إند تريدنج</h1>
                  <p className='text-my_gold text-md font-semibold w-[80%]'>توفير منتجات عالية الجودة من الأسواق العالمية إلى تجار التجزئة المحليين</p>
              </div>
        </div>
        <div className='relative items-center md:flex hidden text-center h-auto justify-center flex-col bg-white py-12 gap-8 my-32'>
          <h2 className="text-my_gold text-3xl font-bold ">توفير منتجات عالية الجودة من الأسواق العالمية إلى تجار التجزئة المحليين</h2>
          <h3 className='text-my_blue2 text-lg font-medium w-[60%] leading-8'>هاي إند هي شركة تجارة عامة رائدة مقرها الإمارات العربية المتحدة. نحن متخصصون في استيراد منتجات عالية الجودة من جميع أنحاء العالم وتوزيعها على تجار التجزئة داخل الإمارات. مهمتنا هي سد الفجوة بين الموردين العالميين وتجار التجزئة المحليين، وضمان سلسلة توريد سلسة وتوافر منتجات عالية الجودة في السوق.</h3>
        </div>
        <div className='md:flex hidden justify-between bg-my_gray px-5 h-auto my-20 py-5'>
          <div className='flex flex-col items-center gap-3 w-[30%]'>
            <Image src={mission} alt="أيقونة المستقبل" className='w-[30%] h-[30%]'/>
            <h2 className='text-white text-2xl'>مهمتنا</h2>
            <ul className='items-center '>
              <li className='text-sm list-item text-black'>توفير منتجات عالية الجودة من الأسواق العالمية إلى تجار التجزئة المحليين</li>
              <li className='text-sm'>تعزيز العلاقات التجارية القوية والمساهمة في النمو الاقتصادي لدولة الإمارات.</li>
            </ul>
          </div>
          <div className='flex flex-col items-center gap-3 w-[30%]'>
            <Image src={vision} alt="أيقونة المستقبل" className='w-[30%] h-[30%]'/>
            <h2 className='text-white text-2xl'>رؤيتنا</h2>
            <ul className='items-center '>
              <li className='text-sm text-black'>أن نصبح الشركة الرائدة في التجارة العامة في الإمارات</li>
              <li className='text-sm'>معترف بنا لجودة خدماتنا والتزامنا بالتميز.</li>
            </ul>
          </div>
          <div className='flex flex-col items-center gap-3 w-[30%]'>
            <Image src={future} alt="أيقونة المستقبل" className='w-[30%] h-[30%]'/>
            <h2 className='text-white text-2xl'>مستقبلنا</h2>
            <ul className='items-center '>
              <li className='text-sm text-black'>توسيع نطاق منتجاتنا لتشمل المزيد من العناصر المتنوعة والمبتكرة من أسواق جديدة</li>
              <li className='text-sm'>تعزيز شبكة اللوجستيات والتوزيع لدينا لضمان تسليم أسرع وأكثر كفاءة.</li>
              <li className='text-sm'>بناء شراكات استراتيجية مع المزيد من الموردين الدوليين لتوسيع سلسلة التوريد لدينا.</li>
              <li className='text-sm'>الاستثمار في الممارسات المستدامة لتعزيز عمليات التجارة الصديقة للبيئة.</li>
            </ul>
          </div>
        </div>
        {/** عرض الجوال */}
        <div className='relative flex items-center text-center justify-center py-16 md:hidden z-0' style={{ height: 'auto' }}>
          <Image src={MobBG} alt="صورة خلفية حولنا للجوال"/>
          <div className='absolute top-40 z-10'>
            <h1 className='text-white text-2xl'>حول هاي إند تريدنج</h1>
            <h2 className='text-my_gold'>توفير منتجات عالية الجودة من الأسواق العالمية إلى تجار التجزئة المحليين</h2>
          </div>
        </div>
        <div className='flex flex-col md:hidden items-center text-center justify-center space-y-8'>
          <h2 className='text-my_blue2 text-xl w-[70%]'>توفير منتجات عالية الجودة من الأسواق العالمية إلى تجار التجزئة المحليين</h2>
          <p className='text-my_blue text-sm w-[90%]'>هاي إند هي شركة تجارة عامة رائدة مقرها الإمارات العربية المتحدة. نحن متخصصون في استيراد منتجات عالية الجودة من جميع أنحاء العالم وتوزيعها على تجار التجزئة داخل الإمارات. مهمتنا هي سد الفجوة بين الموردين العالميين وتجار التجزئة المحليين، وضمان سلسلة توريد سلسة وتوافر منتجات عالية الجودة في السوق.</p>
        </div>
        <div className='items-center md:hidden flex flex-col gap-5 my-5'>
            <div className='flex flex-col items-center border-2 border-my_gold gap-3 w-[70%] h-[350px]'>
            <Image src={mission} alt="أيقونة المستقبل" className='w-[30%] h-[30%]'/>
            <h2 className='text-my_blue2 text-2xl'>مهمتنا</h2>
            <ul className='items-center '>
              <li className='text-sm list-item text-black'>توفير منتجات عالية الجودة من الأسواق العالمية إلى تجار التجزئة المحليين</li>
              <li className='text-sm'>تعزيز العلاقات التجارية القوية والمساهمة في النمو الاقتصادي لدولة الإمارات.</li>
            </ul>
          </div>
          <div className='flex flex-col items-center border-2 border-my_gold gap-3 w-[70%] h-[350px]'>
            <Image src={vision} alt="أيقونة المستقبل" className='w-[30%] h-[30%]'/>
            <h2 className='text-my_blue2 text-2xl'>رؤيتنا</h2>
            <ul className='items-center '>
              <li className='text-sm text-black'>أن نصبح الشركة الرائدة في التجارة العامة في الإمارات</li>
              <li className='text-sm'>معترف بنا لجودة خدماتنا والتزامنا بالتميز.</li>
            </ul>
          </div>
          <div className='flex flex-col items-center border-2 border-my_gold gap-3 w-[70%] h-[400px]'>
            <Image src={future} alt="أيقونة المستقبل" className='w-[30%] h-[30%]'/>
            <h2 className='text-my_blue2 text-2xl'>مستقبلنا</h2>
            <ul className='items-center '>
              <li className='text-sm text-black'>توسيع نطاق منتجاتنا لتشمل المزيد من العناصر المتنوعة والمبتكرة من أسواق جديدة</li>
              <li className='text-sm'>تعزيز شبكة اللوجستيات والتوزيع لدينا لضمان تسليم أسرع وأكثر كفاءة.</li>
              <li className='text-sm'>بناء شراكات استراتيجية مع المزيد من الموردين الدوليين لتوسيع سلسلة التوريد لدينا.</li>
              <li className='text-sm'>الاستثمار في الممارسات المستدامة لتعزيز عمليات التجارة الصديقة للبيئة.</li>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default page;

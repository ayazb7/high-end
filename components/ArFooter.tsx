import React from 'react';
import logo_blue from '@/logos/logo_bluebg.png';
import home_logo from '@/logos/Icon.svg';
import Image from 'next/image';
import Link from 'next/link';
import Email_logo from '@/logos/mail-01.svg';

const Footer = () => {
  return (
    <div>
      <div className='bg-my_blue2 w-full h-80 md:flex hidden justify-between gap-10'>
        <Image className='my-8 ml-10' src={logo_blue} alt="شعار هاي إند مع خلفية زرقاء" width={288} height={288} />
        <div className='flex flex-col justify-start my-20 gap-3'>
          <a className='mb-1 text-white text-xl font-bold'>الشركة</a>
          <Link href='/' className='text-white text-base font-medium'>الرئيسية</Link>
          <Link href='/about' className='text-white text-base font-medium'>حول</Link>
          <Link href='/contact' className='text-white text-base font-medium'>اتصل</Link>
        </div>
        <div className='flex flex-col justify-start my-20 gap-3'>
          <a className='mb-1 text-white text-xl font-bold'>الخدمات</a>
          <Link href='/' className='text-white text-base font-medium'>استيراد</Link>
          <Link href='/' className='text-white text-base font-medium'>توزيع</Link>
          <Link href='/' className='text-white text-base font-medium'>توصيل</Link>
        </div>
        <div className='flex flex-col justify-start my-20 mr-20 gap-5'>
          <a className='mb-1 text-white text-xl font-bold'>المعلومات</a>
          <div className='flex w-full space-x-3'>
            <Image src={home_logo} alt="شعار" />
            <p className='text-white text-base font-medium'>برج داماك للأعمال الطابق السابع عشر، الخليج التجاري، دبي، الإمارات العربية المتحدة</p>
          </div>
          <div className='flex w-full space-x-3'>
            <Image src={Email_logo} alt="شعار" />
            <p className='text-white text-base font-medium'>info@highendtrading.ae</p>
          </div>
        </div>
      </div>
      {/** mobile footer */}
      <div className='bg-my_blue2 w-full flex-col flex md:hidden justify-between items-end'>
        <Image className='self-center' src={logo_blue} alt="شعار هاي إند مع خلفية زرقاء" width={200} height={200} />
        <div className='flex flex-col justify-start items-end mr-4 space-y-1 '>
          <a className='mb-1 text-white text-xl font-bold'>الشركة</a>
          <Link href='/' className='text-white text-base font-medium'>الرئيسية</Link>
          <Link href='/about' className='text-white text-base font-medium'>حول</Link>
          <Link href='/contact' className='text-white text-base font-medium'>اتصل</Link>
        </div>
        <div className='flex flex-col justify-start items-end mr-4 space-y-1'>
          <a className='mb-1 text-white text-xl font-bold'>الخدمات</a>
          <Link href='/' className='text-white text-base font-medium'>استيراد</Link>
          <Link href='/' className='text-white text-base font-medium'>توزيع</Link>
          <Link href='/' className='text-white text-base font-medium'>توصيل</Link>
        </div>
        <div className='flex flex-col justify-end ml-20 my-10 mr-3 gap-5 items-end'>
          <a className='mb-1 text-white text-xl font-bold'>المعلومات</a>
          <div className='flex w-full '>
            <p className='text-white text-base font-medium'>برج داماك للأعمال الطابق السابع عشر، الخليج التجاري، دبي، الإمارات العربية المتحدة</p>
            <Image src={home_logo} alt="شعار" />
          </div>
          <div className='flex w-full space-x-3'>
            
            <p className='text-white text-base font-medium'>info@highendtrading.ae</p>
            <Image src={Email_logo} alt="شعار" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

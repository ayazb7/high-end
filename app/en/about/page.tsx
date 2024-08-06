import Image from '@/node_modules/next/image'
import React from 'react'
import BgImage from '@/images/AboutusBg6.png'
import rectangle from '@/images/aboutBg9.png'
import mission from '@/logos/mission.svg'
import vision from '@/logos/vision.svg'
import future from '@/logos/future.svg'
const page = () => {
  return (
      <div>
        <div className="relative items-center justify-between pt-20  mb-10" style={{ height: 'auto' }}>
            <Image 
                src={BgImage} 
                alt="About us image" 
                className="w-[100%]  object-fill z-0" 

            />
            <Image 
                src={rectangle} 
                alt="about us background continuation" 
                className= "absolute top-12 z-10" 

            />
              <div className='absolute left-10 top-48 z-20 space-y-3'>
                  <h1 className='text-white  font-bold text-3xl'>About High End Trading</h1>
                  <p className='text-my_gold text-md font-semibold w-[80%]'>Delivering quality products from global markets to local retailers</p>
              </div>
              
            
        </div>
        <div className='relative flex items-center text-center h-auto justify-center flex-col bg-white py-12 gap-4'>
          <h2 className="text-my_gold text-2xl font-bold ">Delivering quality products from global markets to local retailers</h2>
          <h3 className='text-my_blue2 text-lg font-medium w-[60%] leading-8'>High End is a premier general trading company based in the UAE. We specialize in importing high-quality products from around the world and distributing them to retailers within the UAE. Our mission is to bridge the gap between global suppliers and local retailers, ensuring a seamless supply chain and the availability of top-notch products in the market.</h3>
        </div>
        <div className='flex justify-between bg-my_gray px-5 '>
          <div className='flex flex-col items-start gap-3 w-[30%]'>
            <Image src={mission} alt="future icon" className='w-[30%] h-[30%]'/>
            <h2 className='text-white text-2xl'>Our Mission</h2>
            <ul className='items-center '>
              <li className='text-sm list-item text-black'>To deliver quality products from global markets to local retailers</li>
              <li className='text-sm  '>fostering strong business relationships and contributing to the economic growth of the UAE.</li>
            </ul>
          </div>
          <div className='flex flex-col items-start gap-3 w-[30%]'>
            <Image src={vision} alt="future icon" className='w-[30%] h-[30%]'/>
            <h2 className='text-white text-2xl'>Our Vision</h2>
            <ul className='items-center '>
              <li className='text-sm  text-black'>To become the leading general trading company in the UAE</li>
              <li className='text-sm  '>recognized for our reliability, quality of service, and commitment to excellence.</li>
            </ul>
          </div>
          <div className='flex flex-col items-start gap-3 w-[30%]'>
            <Image src={future} alt="future icon" className='w-[30%] h-[30%]'/>
            <h2 className='text-white text-2xl'>Our Future</h2>
            <ul className='items-center '>
              <li className='text-sm  text-black'>Expanding our product range to include more diverse and innovative items from new markets</li>
              <li className='text-sm  '>Enhancing our logistics and distribution network to ensure even faster and more efficient delivery.</li>
              <li className='text-sm  '>Building strategic partnerships with more international suppliers to broaden our supply chain.</li>
              <li className='text-sm '>Investing in sustainable practices to promote environmentally friendly trading operations.</li>
            </ul>
          </div>
          
        </div>
    </div>
  );
};

export default page;

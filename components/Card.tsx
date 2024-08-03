import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
  imageSrc: StaticImageData;
  text: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, text }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg mx-2 my-4 w-10/12 md:w-1/4" style={{ height: '414px' }}>
      <div className="relative w-full" style={{ height: '80%' }}>
        <Image src={imageSrc} alt={text} layout="fill" objectFit="cover" />
      </div>
      <div className="bg-[#2F3757] text-white text-center py-2 font-semibold text-2xl flex items-center justify-center" style={{ height: '20%' }}>
        {text}
      </div>
    </div>
  );
};

export default Card;
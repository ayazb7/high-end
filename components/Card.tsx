import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
  imageSrc: StaticImageData;
  text: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, text, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-lg mx-2 my-4 w-10/12 md:w-1/4 h-[414px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-[80%]">
        {!isHovered ? (
          <Image src={imageSrc} alt={text} layout="fill" objectFit="cover" />
        ) : (
          <div className="flex items-center justify-center h-full bg-[#2F3757] text-my_gold text-center font-semibold text-lg px-4">
            {content}
          </div>
        )}
      </div>
      <div className="bg-[#2F3757] text-white text-center py-2 font-semibold text-2xl flex items-center justify-center h-[20%]">
        {text}
      </div>
    </div>
  );
};

export default Card;

import React from 'react';

const ContactCard = () => {
  return (
    <div className="flex flex-col absolute md:left-16 md:top-16 left-0  w-[100%] md:w-[45%] md:h-[70%] z-3 bg-white justify-start items-center pb-10 pt-24 rounded-[30px] shadow-md">
      <div>
        <div className='bg-my_gold text-white w-[40%] md:w-[25%] h-[7%] absolute top-0 left-14 rounded-b-3xl flex items-center font-semibold text-2xl justify-center'>Contact Us</div>
      </div>
      <div className='flex flex-col items-center w-[87.5%] h-full'>
        <p className='text-my_gray font-normal text-md mb-6 text-left w-full'>Please enter your details and your enquiry and we will get back to you as soon as possible</p>
        <div className='flex flex-col space-y-6 w-full flex-grow'>
          <div className='flex space-x-6'>
            <input
              type="text"
              placeholder="First Name"
              className='w-full rounded-xl border-2 border-[#BCB9B9] p-4 focus:border-[#2F3757]'
            />
            <input
              type="text"
              placeholder="Last Name"
              className='w-full rounded-xl border-2 border-[#BCB9B9] p-4 focus:border-[#2F3757]'
            />
          </div>
          <div className='flex space-x-6'>
            <input
              type="text"
              placeholder="Email"
              className='w-full rounded-xl border-2 border-[#BCB9B9] p-4 focus:border-[#2F3757]'
            />
            <input
              type="text"
              placeholder="Phone Number"
              className='w-full rounded-xl border-2 border-[#BCB9B9] p-4 focus:border-[#2F3757]'
            />
          </div>
          <textarea
            placeholder="Message"
            className='w-full rounded-xl border-2 border-[#BCB9B9] p-4 flex-grow resize-none focus:border-[#2F3757]'
          />
        </div>
      </div>
      <button className='button-custom w-[35%] md:w-[20%] h-[8%] rounded-lg bg-my_blue mb-4 mt-6 self-start ml-[6.25%]'>
        Submit 
      </button>
    </div>
  );
};

export default ContactCard;

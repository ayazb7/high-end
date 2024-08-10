import React, { useState } from 'react';

const ContactCard = () => {
  const [firsval, setfirstVal] = useState("");
  const [lastval, setlastVal] = useState("");
  const [Phoneval, setPhonetVal] = useState("");
  const [emailval, setemailVal] = useState("");
  const [messageval, setMessagetVal] = useState("");

  const changefirst = (event :  React.ChangeEvent<HTMLInputElement>): void  => {
    setfirstVal(event.target.value);
  };

  const changelst = (event :  React.ChangeEvent<HTMLInputElement>): void   => {
    setlastVal(event.target.value);
  };

  const changephone = (event :  React.ChangeEvent<HTMLInputElement>): void  => {
    setPhonetVal(event.target.value);
  };

  const changeemail = (event :  React.ChangeEvent<HTMLInputElement>): void  => {
    setemailVal(event.target.value);
  };

  const changeMessage = (event :  React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMessagetVal(event.target.value);
  };

  const handleSubmit = () => {
    if (firsval && lastval && Phoneval && emailval && messageval) {
      fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify({
          firstname: firsval,
          lastname: lastval,
          phone: Phoneval,
          email: emailval,
          message: messageval
        })
      });

      // Clear the form fields after submission
      setfirstVal("");
      setlastVal("");
      setPhonetVal("");
      setemailVal("");
      setMessagetVal("");
    } else {
      alert("Please fill in all the fields before submitting.");
    }
  };

  return (
    <div className="flex flex-col absolute md:left-16 md:top-16 left-0 w-[100%] md:w-[45%] md:h-[70%] z-3 bg-white justify-start items-center pb-10 pt-24 rounded-[30px] shadow-md">
      <div>
        <div className='bg-my_gold text-white w-[40%] md:w-[25%] h-[7%] absolute top-0 left-14 rounded-b-3xl flex items-center font-semibold text-2xl justify-center'>Contact Us</div>
      </div>
      <div className='flex flex-col items-center w-[87.5%] h-full'>
        <p className='text-my_gray font-normal text-md mb-6 text-left w-full'>Please enter your details and your enquiry and we will get back to you as soon as possible</p>
        <div className='flex flex-col space-y-6 w-full flex-grow'>
          <div className='flex space-x-6'>
            <input
              type="text"
              value={firsval}
              onChange={changefirst}
              placeholder="First Name"
              name="first"
              className='w-full rounded-xl border-2 border-[#BCB9B9] p-4 focus:border-[#2F3757]'
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={changelst}
              value={lastval}
              name="last"
              className='w-full rounded-xl border-2 border-[#BCB9B9] p-4 focus:border-[#2F3757]'
            />
          </div>
          <div className='flex space-x-6'>
            <input
              type="text"
              placeholder="Email"
              onChange={changeemail}
              value={emailval}
              name="email"
              className='w-full rounded-xl border-2 border-[#BCB9B9] p-4 focus:border-[#2F3757]'
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={Phoneval}
              onChange={changephone}
              name="phone"
              className='w-full rounded-xl border-2 border-[#BCB9B9] p-4 focus:border-[#2F3757]'
            />
          </div>
          <textarea
            placeholder="Message"
            value={messageval}
            onChange={changeMessage}
            name="message"
            className='w-full rounded-xl border-2 border-[#BCB9B9] p-4 flex-grow resize-none focus:border-[#2F3757]'
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="button-custom w-[35%] md:w-[20%] h-[8%] rounded-lg bg-my_blue mb-4 mt-6 self-start ml-[6.25%]"
        
      >
        Submit 
      </button>
    </div>
  );
};

export default ContactCard;

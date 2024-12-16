import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>

      {/*--------- Left Side ---------------*/}
      <div className='md:w-3/5 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw]'>
        <p className='text-3xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
          Book Appointment <br /> with Trusted Doctors
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <img className='w-28' src={assets.group_profiles} alt="Group Profiles" className='w-3/4 md:w-2/3 lg:w-1/2' />
          <p className='text-white mt-4'>
            Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block'/> schedule your appointment hassle-free.
          </p>
        </div>
        <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
          Book appointment <img className='w-3' src={assets.arrow_icon} alt="Arrow" className='ml-2' />
        </a>
      </div>

      {/*--------- Right Side ---------------*/}
      <div className='md:w-2/5 relative mt-10 md:mt-0'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="Header Image" />
      </div>
    </div>
  );
};

export default Header;
import React, { useState } from 'react';
import 'animate.css';

import { TypeAnimation } from 'react-type-animation';

import Profilecartoon from '../assets/Profilecartoon.jpg';
import Descargas from '../assets/descargas.png';


export const Main = () => {

  const [nav, setNav ] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div id='main' className="relative w-screen min-h-screen h-screen flex flex-col lg:flex-row">
      <div className='w-full lg:w-1/2 h-1/2 lg:h-full p-2 sm:p-4 lg:p-8 flex justify-center items-center'>
        <img
          className='animate__animated animate__rotateInDownLeft object-contain w-full md:w-auto h-full '
          src={Profilecartoon}
          alt='/'
        />
      </div>

      <div className="w-full lg:w-1/2 h-1/2 lg:h-full sm:p-8 flex flex-col justify-center items-start">
        <h1 className="animate__animated animate__fadeInDown text-4xl text-3x1 font-bold text-gray-800 mt-2 sm:mt-4 lg:mt-0 text-start">
          Hi, my name is José Goncalves,
        </h1>

        <h2 className='flex text-3xl text-2x1 pt-2 sm:pt-4 animate__animated animate__fadeInLeft'>
          I'm a
          <TypeAnimation 
            sequence={['FullStack', 2000, 'UX', 2000, 'Project Manager', 2000]}
            wrapper='div'
            repeat={Infinity}
            cursor={true}
            style={{ fontSize: '0.9em', paddingLeft: '5px' }}
          />
        </h2>
        <p className="flex mt-1 mb-8 text-lg sm:mb-12 pt-4 items-justify text-start animate__animated animate__fadeInRight">
        I'm delighted to welcome you to my portfolio. I'm a passionate Full Stack web developer witg a diverse range of skills and industry experience.
        </p>

        <div className='flex items-center sm:flex-row justify-center justify-between space-x-4 sm:space-x-6'>
          <a href="https://drive.google.com/file/d/11bsil4kYlGysLUDW_QqjUTtl1xDZASqK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='flex bg-blue-700 text-white w-full sm:w-auto px-6 py-3 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-700'>
            Resume
            <img className="ml-2 mt-1 animate-bounce" src={Descargas} alt="Descargas Icon" />
          </a>
          <a className='text-black outline outline-[#040404] w-full sm:w-auto px-6 py-3 rounded-lg'
          onClick={ handleNav } href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

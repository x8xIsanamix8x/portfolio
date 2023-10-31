import React from 'react';
import 'animate.css';

import { TypeAnimation } from 'react-type-animation';
import {
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { BiLogoTailwindCss, BiLogoPhp, BiLogoGraphql, BiLogoMongodb, BiLogoFirebase } from 'react-icons/bi';
import { RiJavascriptFill } from 'react-icons/ri';
import { SiExpo, SiExpress, SiMysql } from 'react-icons/si';
import { GrNode } from 'react-icons/gr';

import Profilecartoon from '../assets/Profilecartoon.jpg';
import Descargas from '../assets/descargas.png';

// Define un array de habilidades
const skills = [
  { icon: <AiOutlineHtml5 />, text: 'HTML' },
  { icon: <FaCss3Alt />, text: 'CSS' },
  { icon: <RiJavascriptFill />, text: 'Javascript' },
  { icon: <FaBootstrap />, text: 'Bootstrap' },
  { icon: <BiLogoTailwindCss />, text: 'TailWind' },
  { icon: <BiLogoPhp />, text: 'PHP' },
  { icon: <FaReact />, text: 'React' },
  { icon: <FaReact />, text: 'React Native' },
  { icon: <BiLogoGraphql />, text: 'Graphql' },
  { icon: <SiExpo />, text: 'Expo' },
  { icon: <GrNode />, text: 'Node' },
  { icon: <SiExpress />, text: 'Express' },
  { icon: <BiLogoMongodb />, text: 'MongoDB' },
  { icon: <BiLogoFirebase />, text: 'Firebase' },
  { icon: <SiMysql />, text: 'MySQL' },
];

export const Main = () => {
  return (
    <div id='main' className="relative w-screen min-h-screen h-screen flex flex-col lg:flex-row">
      <div className='w-full lg:w-1/2 h-1/2 lg:h-full p-2 sm:p-4 lg:p-8 flex justify-center items-center'>
        <img
          className='animate__animated animate__rotateInDownLeft object-contain w-full md:w-auto h-full '
          src={Profilecartoon}
          alt='/'
        />
      </div>

      <div className="w-full mt-24 lg:w-1/2 h-1/2 lg:h-full sm:p-8 flex flex-col justify-center items-center">
        <h1 className="animate__animated animate__slideInDown text-4xl text-3x1 font-bold text-gray-800 mt-2 sm:mt-4 lg:mt-0 text-center">
          Hi, my name is José Goncalves,
        </h1>

        <h2 className='flex text-3xl text-2x1 pt-2 sm:pt-4 '>
          I'm a
          <TypeAnimation
            sequence={['FullStack', 2000, 'UX', 2000, 'Project Manager', 2000]}
            wrapper='div'
            repeat={Infinity}
            cursor={true}
            style={{ fontSize: '0.9em', paddingLeft: '5px' }}
          />
        </h2>
        <p className="flex mt-1 mb-8 mx-5 text-lg sm:mb-12 pt-4 items-justify text-justify">
        I am a FullStack developer with over 6 years of experience in the tech industry. 
        I've had the privilege of leading and contributing to various projects for companies 
        in Project Manager roles. My passion lies in creating exceptional user experiences (UX) 
        that make a difference. My constant goal is to leverage my technical skills and experience 
        to drive innovative solutions that solve problems and enrich people's lives. I am excited 
        about the opportunities that the world of technology continues to offer, and I look forward 
        to continuing to learn and grow on this exciting journey.
        </p>

        <div className='flex items-center sm:flex-row justify-center justify-between space-x-4 sm:space-x-6'>
          <button className='flex bg-[#040404] text-white w-full sm:w-auto px-6 py-3 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-700'>
            Resume
            <img className="ml-2 mt-1 animate-bounce" src={Descargas} />
          </button>
          <button className='text-black outline outline-[#040404] w-full sm:w-auto px-6 py-3 rounded-lg'>
            Contact
          </button>
        </div>

        <div className='max-w-[1000px] mx-auto mb-8 p-4 flex flex-col justify-center w-full h-full'>
          <div className='mx-5 lg:-mt-28'>
            <h1 className='text-4xl font-bold text-start text-[#001b5e] inline border-b-4 border-[#001b5e]'>Skills</h1>
          </div>

          <div className='grid mx-5 grid-cols-3 grid-rows sm:grid-cols-5 lg:grid-cols gap-1 mt-4 auto-rows-max'>
            {skills.map((skill, index) => (
              <a key={index} href="#" className="w-full bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                {skill.icon}
                <div class="text-left">
                  <div class="ml-1 font-sans text-sm font-semibold">{skill.text}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

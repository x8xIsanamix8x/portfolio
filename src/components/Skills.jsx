import React from 'react'

import {
    FaCss3Alt,
    FaBootstrap,
    FaReact,
  } from 'react-icons/fa';
  import { AiOutlineHtml5 } from 'react-icons/ai';
  import { BiLogoTailwindCss, BiLogoPhp, BiLogoGraphql, BiLogoMongodb, BiLogoFirebase } from 'react-icons/bi';
  import { RiJavascriptFill } from 'react-icons/ri';
  import { SiExpo, SiExpress, SiMysql } from 'react-icons/si';
  import { GrNode } from 'react-icons/gr';





export const Skills = () => {

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


  return (

    <div id='about' className='max-w-screen-2xl flex flex-col xl:flex-row xl:justify-center items-center xl:items-start gap-12 w-full py-16 px-8 sm:px-12'>

      <div className='flex-1 flex flex-col gap-4 text-center xl:text-left'>

        <div className='mx-2 sm:mx-5'>
          <h1 className='text-4xl font-bold text-[#001b5e] inline border-b-4 border-[#001b5e]'>About me</h1>
        </div>

        <p className='flex mt-1 mb-8 mx-2 sm:mx-5 text-lg sm:mb-12 pt-4 items-center text-justify'>
          I'm a creative engineer, dedicated to crafting engaging and user-friendly experiences. With
          several years of a career in the web development world, I've had the privilege to work across various areas,
          from UI design to the implementation of robust technical solutions.
        </p>

      </div>

      <div className='grid mx-2 sm:mx-5 grid-cols-3 grid-rows sm:grid-cols-5 lg:grid-cols gap-1 lg:mt-20 auto-rows-max'>
        {skills.map((skill, index) => (
          <a key={index} className="w-full bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            {skill.icon}
            <div className="text-left">
              <div className="ml-1 font-sans text-sm font-semibold">{skill.text}</div>
            </div>
          </a>
        ))}
      </div>

    </div>





    // <div className='max-w-[1000px] mx-auto mt-32 mb-8 p-4 flex flex-col justify-center w-full h-full'>
    //       <div className='mx-5 lg:-mt-28'>
    //         <h1 className='text-4xl font-bold text-start text-[#001b5e] inline border-b-4 border-[#001b5e]'>Skills</h1>
    //       </div>

    //       <div className='grid mx-5 grid-cols-3 grid-rows sm:grid-cols-5 lg:grid-cols gap-1 mt-4 auto-rows-max'>
    //         {skills.map((skill, index) => (
    //           <a key={index} href="#" className="w-full bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
    //             {skill.icon}
    //             <div class="text-left">
    //               <div class="ml-1 font-sans text-sm font-semibold">{skill.text}</div>
    //             </div>
    //           </a>
    //         ))}
    //       </div>
    //     </div>
  )
}

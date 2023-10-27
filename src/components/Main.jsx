import React from 'react'

import { TypeAnimation } from 'react-type-animation'
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

import Profilecartoon from '../assets/Profilecartoon.jpg'
import Descargas from '../assets/descargas.png'


export const Main = () => {
  return (
    <div id='main' className="relative h-screen flex flex-col lg:flex-row">
            
            <div className='w-full lg:w-1/2 h-1/2 lg:h-full p-2 sm:p-4 lg:p-8 flex justify-center items-center'>
                <img 
                    className='object-contain w-full md:w-auto h-full ' 
                    src={ Profilecartoon } 
                    alt='/'
                    />
            </div>

            <div className=" w-full lg:w-1/2 h-1/2 lg:h-full sm:p-8 flex flex-col justify-center items-center">
                <h1 className="text-4xl text-3x1 font-bold text-gray-800 mt-2 sm:mt-4 lg:mt-0 text-center">
                    Hi, my name is José Goncalves,
                </h1>

                <h2 className='flex text-3xl text-2x1 pt-2 sm:pt-4 '>
                    I'm a
                    <TypeAnimation 
                        sequence={[
                            'FullStack',
                            2000,
                            'UX',
                            2000,
                            'Project Manager',
                            2000,
                        ]}
                        wrapper='div'
                        repeat={ Infinity }
                        cursor={true}
                        style={{fontSize: '0.9em', paddingLeft: '5px' }}
                    />
                </h2>

                <p className="flex mt-2 m-8 text-lg sm:mb-12 pt-4 items-justify">
                    Full Stack Web Developer with a Passion for creating Engage and User Experiences. Let's JOIN forces and bring your digital
                    dreams to frution, get in touch, and let's embark on this exciting journey together.
                </p>

                <div className='flex  items-center sm:flex-row justify-center justify-between space-x-4 sm:space-x-6'>
                    <button className='flex bg-[#040404] text-white w-full sm:w-auto px-6 py-3 rounded-lg '>
                        Resume
                        <img className="ml-2 mt-1" src={Descargas} />
                    </button>
                    <button className='text-black outline outline-[#040404] w-full sm:w-auto px-6 py-3 rounded-lg'>
                        Contact
                    </button>
                </div>

            </div>

            
            
            
        </div>
  )
}



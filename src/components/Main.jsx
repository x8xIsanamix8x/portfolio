import React from 'react'

import { TypeAnimation } from 'react-type-animation'
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

import Ellipse from '../assets/Ellipse.png'
import Descargas from '../assets/descargas.png'


export const Main = () => {
  return (
    <div id='main' className="m-auto md:pl-20 p-4 py-16 grid grid-cols-2 object-cover space-x-32 w-full h-screen container content-between flex justify-center mx-auto sm:py-12 ">
            
            <div>
                <img 
                    className='pt-32 lg:ml-32 object-cover m-max  max-w-xl justify-center lg:items-start items-center rounded-full lg:text-right' 
                    src={ Ellipse } 
                    alt='/'
                    />
            </div>

            <div className=" flex flex-col justify-center  text-center rounded-sm lg:max-w-xs xl:max-w-lg lg:text-left">
                <h1 className="m:text-5xl text-4xl font-bold text-gray-800 pt-4">
                    Hi, my name is José Goncalves,
                </h1>
                <p className="flex mt-6 mb-8 text-lg sm:mb-12 pt-4">
                    Full Stack Web Developer with a Passion for creating Engage and User Experiences. Let´s JOIN forces and bring your digital
                    dreams to frution, get in touch, and let´s embark on this exciting journey together.
                </p>

                <div className='flex items-stretch content-between space-x-6'>
                    <button className='flex justify-center bg-[#040404] text-gray-100 mt-4 w-full p-4 rounded-lg'>
                        Resume
                        <img className="flex mx-2 mt-1 content-between" src={Descargas} />
                    </button>
                    <button className='text-black outline outline-[#040404] mt-4 w-full p-4 rounded-lg'>
                        Contact
                    </button>
                </div>

            </div>

            
            
            
        </div>
  )
}



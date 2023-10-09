import React from 'react'

import { TypeAnimation } from 'react-type-animation'
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

import devbanner from '../assets/devbanner.png'


export const Main = () => {
  return (
    <div id='main'>
        <img 
        className='object-cover w-full h-screen ' 
        src={ devbanner } 
        alt='/'
        />
        <div className='w-full h-screen object-cover absolute top-0'>
            <div className='max-w-[700px] m-64 h-f64 flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800 text-white'>I'm José Goncalves</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800 text-white'>
                    I'm a
                    <TypeAnimation
                        sequence={[
                            'Developer',
                            2000,
                            'UX',
                            2000,
                            'Project Manager',
                            2000,
                        ]}  
                        wrapper='div'
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '1em', paddingLeft: '5px' }}
                    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaTwitter className='cursor-pointer' size={20}/>
                    <FaFacebook className='cursor-pointer' size={20}/>
                    <FaInstagram className='cursor-pointer' size={20}/>
                    <FaLinkedinIn className='cursor-pointer' size={20}/>
                </div>
            </div>


        </div>
    </div>
  )
}



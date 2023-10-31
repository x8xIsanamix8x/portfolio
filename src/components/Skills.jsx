import React from 'react'

import HTML from '../assets/skillslogo/HTML5.png'
import CSS from '../assets/skillslogo/CSS.png'
import Bootstrap from '../assets/skillslogo/Bootstraplogo.png'
import Javascript from '../assets/skillslogo/Javascript.png'
import PHP from '../assets/skillslogo/PHP.png'
import MYSQL from '../assets/skillslogo/MySQL.png'
import MongoDB from '../assets/skillslogo/MongoDB.png'
import Express from '../assets/skillslogo/Express.png'
import Reactcode from '../assets/skillslogo/Reactcode.png'
import Nodecode from '../assets/skillslogo/Nodecode.png'
import Tailwindcss from '../assets/skillslogo/TailwindCSS.png'
import Graphqlcode from '../assets/skillslogo/Graphqlcode.png'
import ReactNativecode from '../assets/skillslogo/ReactNativecode.png'
import ExpoFramework from '../assets/skillslogo/ExpoFramework.png'
import Firebasecode from '../assets/skillslogo/Firebasecode.png'





export const Skills = () => {
  return (
    <div name='skills' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 w-full sm:-w-1/2 '>

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <h1 className='text-4xl font-bold text-start text-[#001b5e] inline border-b-4 border-[#001b5e]'>Skills</h1>
                <p className='text-center py-8 text-start'>// These are the technologies I-ve worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-7 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='mx-auto' src={ HTML } alt='HTML iCON' />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='mx-auto' src={ CSS } alt='HTML iCON' />
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='mx-auto' src={ Javascript } alt='HTML iCON' />
                    <p className='my-4'>Javascript</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='mx-auto' src={ Bootstrap } alt='HTML iCON' />
                    <p className='my-4'>Bootstrap</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='mx-auto' src={ Reactcode } alt='HTML iCON' />
                    <p className='my-4'>React / React Native</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='mx-auto' src={ Tailwindcss } alt='HTML iCON' />
                    <p className='my-4'>TailwindCSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='mx-auto' src={ PHP } alt='HTML iCON' />
                    <p className='my-4'>PHP</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='mx-auto' src={ Graphqlcode } alt='HTML iCON' />
                    <p className='my-4'>Graphql</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='mx-auto' src={ Firebasecode } alt='HTML iCON' />
                    <p className='my-4'>Firebase</p>
                </div>
            
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='mx-auto' src={ ExpoFramework } alt='HTML iCON' />
                    <p className='my-4'>Expo</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='mx-auto' src={ Nodecode } alt='HTML iCON' />
                    <p className='my-4'>Node</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='mx-auto' src={ Express } alt='HTML iCON' />
                    <p className='my-4'>Express</p>
                </div>
            
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='mx-auto' src={ MYSQL } alt='HTML iCON' />
                    <p className='my-4'>MYSQL</p>
                </div>
            
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='mx-auto' src={ MongoDB } alt='HTML iCON' />
                    <p className='my-4'>MongoDB</p>
                </div>

            </div>

                
        

        </div>

    </div>
  )
}

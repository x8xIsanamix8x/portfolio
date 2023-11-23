import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className='mx-auto px-8 flex flex-col items-center mt-8 text-gray-600 dark:bg-gray-900'>
        <div className='text-center'>
            <h1 className='text-2xl mt-4 text-gray-300 font-bold mb-2'>José Goncalves Portfolio</h1>
            <p className='text-sm'>
                Thank you for visiting my portfolio! I'm a passionate developer and designer committed to creating impactful digital experiences. I'm always seeking new challenges to apply my skills and learn something new.
            </p>
        </div>
        <div className='flex my-4 space-x-4'>
            <a href='https://www.instagram.com/goncalves._jose/' target="_blank">
                <FaInstagram size={30} /> 
            </a>
            <a href='https://twitter.com/xJoseGoncalves' target="_blank">
                <FaTwitterSquare size={30} />
            </a>
            <a href='https://github.com/x8xIsanamix8x' target="_blank">
                <FaGithubSquare size={30} />
            </a>
        </div>
        <p className='text-sm mb-4'>© All rights reserved</p>
    </div>
  );
};
import React from 'react'

export const ProjectsItems = ({img, title}) => {
  return (
    
    <div className='flex flex-col bg-gradient-to-r bg-[#001b5e] rounded-xl overflow-hidden border-2 border-gray drop-shadow-2xl transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300'>
        <img src= {img} className='object-cover h-fit m-auto' />
        <div className='px-5 py-4'>
            <h4 className='text-2xl font-medium text-white'>{title}</h4>
            <a className='inline-flex place-items-end mt-4 px-4 py-3 font-semibold text-m text-white rounded-md bg-blue-500 hover:scale-105 hover:bg-blue-600 active:scale-95 transition-all duration-300'>
                View Demo
            </a>
        </div>
    </div>






    // <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-black/70 transition-all duration-300'>
    //     <img src={img} alt="/" className='rounded-xl group-hover:scale-110 transition-all duration-500' />
    //     <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
    //         <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
    //             {title}
    //         </h3>
    //         <p className='pb-4 pt-2 text-white text-center'>
    //             React Js
    //         </p>
    //         <a href='/' />
    //             <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>
    //                 More Info
    //             </p>
    //     </div>

    // </div>
  )
}

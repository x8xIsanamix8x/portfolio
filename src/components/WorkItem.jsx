import React from 'react'

const WorkItem = ({year, company, title, image, duration, details}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className='mb-10 ml-4 md:w-1/2'>
            <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white' />
            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>
                  {year}
                </span>
                <span className='text-lg font-semibold text-[#001b5e]'>{company}</span>
            </p>
            
            <span class="my-2 block mb-2 px-16 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{title}</span>

            <span className='my-2 px-16 justify-content text-sm font-normal leading-none text-stone-400'>
                  {duration}
               </span>
            <p className='my-2 px-16 text-justify font-normal text-stone-500'>{details}</p>
        </li>
        <div className='md:w-1/2 md:pl-4'>
          <img 
              className='flex object-contain w-full h-full' 
              src={image}
              />
        </div>
    </ol>
  )
}

export default WorkItem
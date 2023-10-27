import React from 'react'

import  WorkItem  from './WorkItem'

import homeborlogin from '../assets/homeborlogin.png'
import Canaimaproject from '../assets/Canaimaproject.png'



const data = [
    {
        year: 2019,
        company: 'Homebor Platform',
        title: 'Project Manager | Software Engineer',
        duration: '4 Years',
        details: 
        'I led the development of Homebor Platform, a comprehensive platform for managing international students in Canada.  The platform offers a robust technological infrastructure, a user-friendly mobile app, and a custom CRM that makes it easy for businesses to manage their international students.  As a technical leader, I developed the platform from infrastructure to UX/UI, created a mobile app available on Google Store and App Store, and launched a CRM for international students in Canada.  These achievements have allowed Homebor Platform to quickly gain a significant market share, and it is expected to continue to grow in the coming years.',
        image: homeborlogin 
    },
    {
        year: 2015,
        company: 'Centro Nacional de Tecnologías de Información',
        title: 'Project Manager | Software Engineer',
        duration: '4 Years',
        details: 
        'I participated as an intern in the Canaima GNU/Linux project. Due to my willingness and curiosity, I managed to stay permanently on the project. I went through all possible technical areas: technical support, server administrator, web developer, and developer of the Canaima GNU/Linux distribution, until I became project leader. I organized meetings with different companies and government entities to obtain requirements and strategic alliances. My achievements in this period were launching three stable versions of the distribution, documenting the project for the first time, and achieving great alliances with universities.',
        image: Canaimaproject 
    },

]

export const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto p-4 py-16 flex flex-col'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] py-8'>Work Experience</h1>
        {data.map((item, idx) => (
            <WorkItem 
                key={idx} 
                year={item.year} 
                company={item.company}
                title={item.title} 
                duration={item.duration} 
                details={item.details}
                image={item.image}
            />
        ))}
    </div>
  )
}

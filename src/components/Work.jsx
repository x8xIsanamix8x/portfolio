import React from 'react'
import  WorkItem  from './WorkItem'
import homeborlogo from '../assets/homeborlogo.png'

const data = [
    {
        year: 2019,
        company: 'Homebor Platform',
        title: 'Project Manager | Software Engineer',
        duration: '4 Years',
        details: 
        'I was the first developer of the Homebor technology platform. Based on the requirements of its founder, I created infrastructure for the technological platform, organized the database, configured and managed the servers necessary for its use, and designed all the UX and UI to improve the user experience. I had the opportunity to find and organize my own team of programmers, and together with them I created a mobile application available in the Google Store and App Store. I also participated in meetings to achieve its sale. We managed to launch a specialized CRM for the management of international students in Canada, where any student in the world can register and manage their entire stay through the Homebor platform. I was the first developer of the Homebor technological platform. Based on the requirements of its founder, I created infrastructure for the technological platform, organized the database, configured and managed the servers necessary for its use, and designed all the UX and UI to improve the user experience. I had the opportunity to find and organize my own team of programmers, and together with them I created a mobile application available in the Google Store and App Store. I also participated in meetings to achieve its sale. We managed to launch a specialized CRM for the management of international students in Canada, where any student in the world can register and manage their entire stay through the Homebor platform.'
    },
    {
        year: 2015,
        company: 'Centro Nacional de Tecnologías de Información',
        title: 'Project Manager | Software Engineer',
        duration: '4 Years',
        details: 
        'I participated as an intern in the Canaima GNU/Linux project. Due to my willingness and curiosity, I managed to stay permanently on the project. I went through all possible technical areas: technical support, server administrator, web developer and developer of the Canaima GNU distribution, until I became project leader. I organized meetings with different companies and government entities to obtain requirements and strategic alliances. My achievements in this period were launching three stable versions of the distribution, documenting the project for the first time and achieving great alliances with universities.'
    },

]

export const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] py-8'>Work Experience</h1>
        {data.map((item, idx) => (
            <WorkItem 
                key={idx} 
                year={item.year} 
                company={item.company}
                title={item.title} 
                duration={item.duration} 
                details={item.details}
            />
        ))}
    </div>
  )
}

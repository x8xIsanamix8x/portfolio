import React from 'react'
import { ProjectsItems } from './ProjectsItems'
import CanaimaGNULinux from '../assets/CanaimaGNULinux.png'
import HomeborProject from '../assets/HomeborProject.png'
import Project6 from '../assets/project6.png'
import Project5 from '../assets/project5.png'
import Project4 from '../assets/project4.png'
import Project3 from '../assets/project3.png'
import Project2 from '../assets/project2.png'

export const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
            Projects
        </h1>
        <p className='text-justify py-8'>
        In my portfolio, you will find a curated collection of projects that represent
        my journey as a developer. These projects reflect my dedication to crafting functional 
        and visually appealing solutions. From web applications to mobile apps, each project 
        showcases my passion for innovation and user-centric design. 
        I take pride in the diverse range of work I've accomplished, 
        and I'm excited to share it with you.
        </p>
        <div className='grid sm:grid-cols-2 gap-12 py-8'>
            <ProjectsItems img={HomeborProject} title='Homebor Platform' />
            <ProjectsItems img={CanaimaGNULinux} title='Distribution Canaima' />
            <ProjectsItems img={Project6} title='Jobsearch' />
            <ProjectsItems img={Project5} title='Agenda Project' />
            <ProjectsItems img={Project3} title='Search Hero' />
            <ProjectsItems img={Project4} title='Gif App' />
            <ProjectsItems img={Project2} title='Calendar App' />
            

        </div>

    </div>
  )
}

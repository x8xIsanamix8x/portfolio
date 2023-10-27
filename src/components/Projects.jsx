import React from 'react'
import { ProjectsItems } from './ProjectsItems'
import CanaimaGNULinux from '../assets/CanaimaGNULinux.png'
import HomeborProject from '../assets/HomeborProject.png'
import Gamezone from '../assets/Gamezone.png'
import StoreProject from '../assets/StoreProject.png'

export const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
            Projects
        </h1>
        <p className='text-center py-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Et tenetur aperiam id sit omnis hic labore velit mollitia
            distinctio repellendus reprehenderit reiciendis,
            commodi delectus voluptates aliquid! Id, at? Cum, velit?
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectsItems img={CanaimaGNULinux} title='Distribution Canaima' />
            <ProjectsItems img={HomeborProject} title='Homebor Platform' />
            <ProjectsItems img={Gamezone} title='GameZone Project' />
            <ProjectsItems img={StoreProject} title='Store Project' />

        </div>

    </div>
  )
}

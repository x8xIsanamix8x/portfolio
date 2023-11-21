import { useState } from 'react'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import { ProjectsItems } from './ProjectsItems'

import CanaimaGNULinux from '../assets/CanaimaGNULinux.png'
import HomeborProject from '../assets/HomeborProject.png'
import Project6 from '../assets/project6.png'
import Project5 from '../assets/project5.png'
import Project4 from '../assets/project4.png'
import Project3 from '../assets/project3.png'
import Project2 from '../assets/project2.png'
import uxproject1 from '../assets/ux-project1.png'
import uxproject2 from '../assets/ux-project2.png'
import uxproject3 from '../assets/ux-project3.png'
import uxproject4 from '../assets/ux-project4.png'
import uxproject5 from '../assets/ux-project5.png'

export const Projects = () => {

  const [activeTab, setActiveTab] = useState('Dev');

  const categories = ['Dev', 'UX'];

  const projects = {
    Dev: [
      { id: 1, src: HomeborProject, title: 'Homebor Platform'}, 
      { id: 2, src: CanaimaGNULinux, title: 'Distribution Canaima'},
      { id: 3, src: Project6, title: 'Jobsearch'},
      { id: 4, src: Project5, title: 'Agenda Project'},
      { id: 5, src: Project3, title: 'Search Hero'},
      { id: 6, src: Project4, title: 'Gif App'},
      { id: 7, src: Project2, title: 'Calendar App'},
    ],
    UX: [
      { id: 1, src: uxproject1, title: 'Homebor Web' },
      { id: 2, src: uxproject2, title: 'Homebor Movil' },
      { id: 3, src: uxproject3, title: 'Store Project' },
      { id: 4, src: uxproject4, title: 'VideoGame Zone' },
      { id: 5, src: uxproject5, title: 'BarberShop' },
    ],
  };


  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <div className='mx-5 mb-12'>
          <h1 className='text-4xl font-bold text-start text-[#001b5e] inline border-b-4 border-[#001b5e]'>Projects</h1>
        </div>
        <p className='text-justify py-8'>
        In my portfolio, you will find a curated collection of projects that represent
        my journey as a developer. These projects reflect my dedication to crafting functional 
        and visually appealing solutions. From web applications to mobile apps, each project 
        showcases my passion for innovation and user-centric design. 
        I take pride in the diverse range of work I've accomplished, 
        and I'm excited to share it with you.
        </p>


        <Tabs value={ activeTab }>
        <TabsHeader className="bg-gray-50">
          {categories.map((category) => (
            <Tab
              key={category}
              value={category}
              onClick={() => setActiveTab(category)}
              className={activeTab === category ? "border-b-2 border-[#001b5e] text-gray-900" : ""}
            >
              {category}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className='grid sm:grid-cols-2 gap-12 py-8'>
          {projects[activeTab].map(({ id, src, title }) => (
            <TabPanel key={id} value={activeTab}>
              <ProjectsItems img={src} title={title} />
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>


    </div>
  )
}

{/* <div className='grid sm:grid-cols-2 gap-12 py-8'>
<ProjectsItems img={HomeborProject} title='Homebor Platform' />
<ProjectsItems img={CanaimaGNULinux} title='Distribution Canaima' />
<ProjectsItems img={Project6} title='Jobsearch' />
<ProjectsItems img={Project5} title='Agenda Project' />
<ProjectsItems img={Project3} title='Search Hero' />
<ProjectsItems img={Project4} title='Gif App' />
<ProjectsItems img={Project2} title='Calendar App' />
</div> */}
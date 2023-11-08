import { ProjectsItems } from './ProjectsItems'
import CanaimaGNULinux from '../assets/CanaimaGNULinux.png'
import HomeborProject from '../assets/HomeborProject.png'
import Project6 from '../assets/project6.png'
import Project5 from '../assets/project5.png'
import Project4 from '../assets/project4.png'
import Project3 from '../assets/project3.png'
import Project2 from '../assets/project2.png'

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import { useState } from 'react'

export const Projects = () => {



  const [activeTab, setActiveTab] = useState(1);

  const categories = [
    { id: 1, categorie: 'Dev'},
    { id: 2, categorie: 'UX'}
  ]

  const data = [
    { id: 1, src: HomeborProject, title: 'Homebor Platform', cat: 'Dev'}, 
    { id: 2, src: CanaimaGNULinux, title: 'Distribution Canaima' , cat: 'Dev'},
    { id: 3, src: Project6, title: 'Jobsearch', cat: 'UX'},
    { id: 4, src: Project5, title: 'Agenda Project', cat: 'UX'},
    { id: 5, src: Project3, title: 'Search Hero', cat: 'UX'},
    { id: 6, src: Project4, title: 'Gif App', cat: 'UX'},
    { id: 7, src: Project2, title: 'Calendar App', cat: 'UX'},
  ]

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

          <Tabs>
            <TabsHeader className="bg-gray-50"
              
            >
              {categories.map(({ id, categorie }) => (
                <Tab key={id} value={categorie} onClick={() => setActiveTab(id)}
                className={activeTab === id ? "border-b-2 border-[#001b5e] text-gray-900" : ""}>
                  {categorie}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody className='grid sm:grid-cols-2 gap-12 py-8' 
            >
              {data.map(({ id, title, src, cat }) => (
                <TabPanel key={id} value={cat}>
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
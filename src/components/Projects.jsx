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
      { id: 1, src: HomeborProject, title: 'Homebor Platform', url: 'https://homebor.com'}, 
      { id: 2, src: CanaimaGNULinux, title: 'Distribution Canaima', url: 'https://canaima.softwarelibre.gob.ve/'},
      { id: 3, src: Project6, title: 'Jobsearch', url: 'https://jobsearch-tailwindcss.onrender.com'},
      { id: 4, src: Project5, title: 'Agenda Project', url: ' https://journal-app-zm12.onrender.com/ '},
      { id: 5, src: Project3, title: 'Search Hero', url: 'https://heroes-app-6grs.onrender.com/'},
      { id: 6, src: Project4, title: 'Gif App', url: 'https://gif-app-tbc0.onrender.com'},
      { id: 7, src: Project2, title: 'Calendar App', url: 'https://calendar-mern-c0lb.onrender.com/'},
    ],
    UX: [
      { id: 1, src: uxproject1, title: 'Homebor Web', url: 'https://www.figma.com/file/xidbBfJqLkD1Qf9jRZrPot/HomeborWeb?type=design&node-id=0%3A1&mode=design&t=skv70itXNHDJseB9-1' },
      { id: 2, src: uxproject2, title: 'Homebor Movil', url: 'https://www.figma.com/file/WL4GfgvWO9lsr7NkjXuIGp/CalendarApp?type=design&node-id=0%3A1&mode=design&t=uxBA5vJjgS6p7b1Q-1' },
      { id: 3, src: uxproject3, title: 'Store Project', url: 'https://www.figma.com/file/nw4FoLwcyAHheWMzs9dU6t/StoreProject?type=design&node-id=0%3A1&mode=design&t=d6pdGutA2rqtysdT-1' },
      { id: 4, src: uxproject4, title: 'VideoGame Zone', url: 'https://www.figma.com/file/bAiZnUUiqlGq5plybO8exZ/VideogameZone?type=design&node-id=0%3A1&mode=design&t=tgKqCEytuIAafvk7-1' },
      { id: 5, src: uxproject5, title: 'BarberShop', url: 'https://www.figma.com/file/Uxne9HCf60qNkxjkPPLEGz/BarberShop-Canada?type=design&node-id=0%3A1&mode=design&t=krzJKZlLgRjTjclE-1' },
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
          {projects[activeTab].map(({ id, src, title, url }) => (
            <TabPanel key={id} value={activeTab}>
              <ProjectsItems img={src} title={title} url={url} />
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
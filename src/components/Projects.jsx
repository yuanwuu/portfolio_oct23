import React from 'react'
import ProjectItem from './ProjectItem'


const Projects = () => {
  return (
      <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        {/* <p className='text-center py-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus fugit, illo provident a possimus quidem, maxime magni tempore, repellat expedita veniam fuga architecto laboriosam! Non quas odio voluptatibus sapiente voluptate?</p> */}
        <div 
        className='grid sm:grid-cols-2 gap-12'
        >
            <ProjectItem />
        </div>
      </div>
    
  )
}

export default Projects

import React from 'react'
import ProjectItem from './ProjectItem'
import sampleImg from '../assets/logo.png'
import farkledGame from '../assets/farkled.png'
import bookshelfApp from '../assets/bookshelf.png'


const Projects = () => {
  return (
      <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus fugit, illo provident a possimus quidem, maxime magni tempore, repellat expedita veniam fuga architecto laboriosam! Non quas odio voluptatibus sapiente voluptate?</p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={farkledGame} title='farkled' />
            <ProjectItem img={bookshelfApp} title='bookshelf' />
            <ProjectItem img={sampleImg} title='sample Img' />
            <ProjectItem img={sampleImg} title='sample Img' />
        </div>
      </div>
    
  )
}

export default Projects

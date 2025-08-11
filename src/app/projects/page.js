import Project1 from '@/components/Project1'
import Project2 from '@/components/Project2'
import React from 'react'

const Project = () => {
  return (
    <div>
      <p className='text-3xl font-bold py-10 text-center'>All Project</p>
      <Project1/>
      <div className='border-1 border-gray-400 w-full mt-10 mb-10'></div>
      <Project2/>
      <div className='border-1 border-gray-400 w-full mt-10 mb-10'></div>
    </div>
  )
}

export default Project

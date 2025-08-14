import Project1 from '@/components/Project1'
import Project2 from '@/components/Project2'
import Project3 from '@/components/Project3'
import React from 'react'

const Project = () => {
  return (
    <div className='bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-colors duration-300'>
      <div className='container mx-auto px-4'>
        <p className='text-4xl font-bold py-20 text-center'>All Projects</p>

        {/* Project 1 */}
        <Project1 />
        <div className='border border-gray-400 dark:border-gray-600 w-full my-10'></div>

        {/* Project 2 */}
        <Project2 />
        <div className='border border-gray-400 dark:border-gray-600 w-full my-10'></div>

        {/* Project 3 */}
        <Project3 />
      </div>
    </div>
  )
}

export default Project

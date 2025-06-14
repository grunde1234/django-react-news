import React from 'react'
import { TriangleAlert } from 'lucide-react'

const NotFound = () => {
  return (
    <>
    <section className='flex flex-col items-center justify-center max-w-6xl mt-28'>
    <h1 className='text-9xl'>404</h1>
    <p className='text-xl leading-[5rem]'>NOT FOUND</p>
    <span className='w-16'>
    <TriangleAlert className='w-full h-full' />
    </span>
    </section>
    </>
  )
}

export default NotFound
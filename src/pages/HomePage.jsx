import React from 'react'
import Hero from '../components/Hero'
import NewsContent from '../components/NewsContent'


const HomePage = () => {
  return (
    <>
    <Hero />
    <NewsContent home={true}/>
    </>
  )
}

export default HomePage
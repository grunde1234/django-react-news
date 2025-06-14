import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MainLayout = () => {
  return (
    /* The body is dark when in settings dark */
    <div className='min-h-screen text-black bg-white dark:bg-black dark:text-white'>
        <NavBar />
        {/* Outlet to display children routes */}
         <Outlet />
         <ToastContainer
         position='bottom-right' />
         <Footer />
    </div>
  )
}

export default MainLayout
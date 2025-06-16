import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import NewsPage from './pages/NewsPage'
import NotFound from './pages/NotFound'
import NewsPageRender, { newsLoad } from './pages/NewsPageRender'
import AddNewsPage from './pages/AddNewsPage'
import axios from 'axios'
import { toast } from 'react-toastify'
import AddUserPage from './pages/AddUserPage'



const App = () => {
  
  // ✅ Cleaned up addNews function
  const addNews = async (newsData) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/articles/add`, newsData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
     
      // Notify user of success
      toast.success('News added successfully!');
      console.log(response);
    } catch (error) {
      console.error('Error adding news:', error);
       toast.error('Failed to add news. Please try again.');
    }
  };



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage/>}/>
        <Route path='/news' element={<NewsPage />}/>
        <Route path='/adduser' element={<AddUserPage />}/>
        <Route path='/addnews' element={<AddNewsPage addNews={addNews} />}/>
        <Route path='/news/:id' element={<NewsPageRender />} loader={newsLoad}/>
        <Route path='*' element={<NotFound />}/>
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}

export default App

import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';

const NewsPageRender = () => {
  const {id} = useParams();
  const news = useLoaderData()
  //const [data, setData] = useState([])
  //const [loading, setLoading] = useState(true)
  
  return (
   <section className='flex flex-col justify-center max-w-6xl p-0 m-0 mx-auto text-center widescreen:section-min-height tallscreen:section-min-height gap-14'>
    <header className='text-4xl'>
      {news.title} at {news.location}
    </header>
    <div>
      <div className="w-full md:w-full">
              <img
                src={news.image_select} // Fix path from public folder
                alt=''
                className="object-cover w-full h-64 rounded-md shadow-md md:h-96"
              />
            </div>
    </div>
    <div>
      {news.description}
    </div>
    <div className='bottom-0 pl-4 text-sm text-left text-gray-500'>
      published on {news.published_on}
    </div>
    </section> 
  )
}

const newsLoad = async({params})=>{
  try{
   const res = await axios(`/api/articles/${params.id}`);
   console.log(res.data)
    return res.data
   
  }catch(error){
    console.log(error.message)
  }
}

export {NewsPageRender as default, newsLoad};























/* import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const NewsPageRender = () => {
  const {id} = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const newsDetails = async()=>{
    try{
     const res = await axios.get(`/api/article/${id}`)
     setData(res.data)
     console.log(res)
    }catch(err){
      console.log(err)
    }finally{
      setLoading(false)
    }
  }
  newsDetails();
},[])
  return (
    <div>{loading ?(<div className='flex items-center justify-center widescreen:section-min-height tallscreen:section-min-height' ><Spinner loading={loading} /></div>) :(data.title)}</div>
  )
}
//const NewsLoad = async({para})
export default NewsPageRender */
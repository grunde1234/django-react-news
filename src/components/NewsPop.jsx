import React from 'react'
import { useState } from 'react'
import { MapPin } from 'lucide-react';
import { useEffect } from 'react';
import Aos from 'aos';
import { Link } from 'react-router-dom';

const NewsPop = ({news}) => {
  const [showFullNews, setShowFullNews] = useState(false)

useEffect(()=>{
  Aos.init({ duration: 1500, once: true });
},[])
 // const [showFullNews, getshowFullNews] = useState(false);
  //console.log(news)

  let description = news.description;
  /* console.log(newsContent) */
if(!showFullNews){
 description = description.substring(0, 10) + '... more';
}

 //let showDescription = show ? description : description = 
  //Equalls the former value and additionals
   
  return (
    <Link to={`/news/${news.id}/`}
            className="flex flex-col items-center gap-6 md:flex-row"
            data-aos="fade-right"
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={news.image_select} // Fix path from public folder
                alt=''
                className="object-cover w-full h-64 rounded-md shadow-md md:h-72"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 ">
              <h2 className="mb-3 text-2xl font-bold leading-10 text-black md:text-3xl dark:text-white">
                {news.title}
              </h2>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                {description}
              </p>
              <span className="flex items-center text-sm leading-10 text-gray-500 almt-2 dark:text-gray-400">
                Occured at: {news.location}
                <span className='w-10 ml-1'><MapPin/></span>
              </span>
              
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Published on: {news.published_on}
              </p>
            </div>
          </Link>
  )
}

export default NewsPop
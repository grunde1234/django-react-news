import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import News from '../../public/News.json'; // if you're storing JSON in public
import NewsPop from './NewsPop';
import axios from 'axios';
import { useState } from 'react';
import Spinner from './Spinner';

const NewsContent = ({home=false}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(false);
  

  //for sideEffects
  useEffect(() => {
   
    const getData = async()=>{
      const apiUrl = home ?'/api/articles?limit=1': '/api/articles';
    try{
       const res = await axios.get(apiUrl);
       setData(res.data.results || res.data); // Handle both paginated and non-paginated responses
       console.log(res)
    }catch(error){
      console.log(error.message)
    }
    finally{
      setLoading(false)
    }
  };
  getData();
 // console.log(getData())
}, []);
/* Only the first 3 News report shows up */
 //const recentNews =home ? News.slice(0,1) : data
 
 
  return (
    <div>{loading ? 
    (<div className='flex items-center justify-center widescreen:section-min-height tallscreen:section-min-height' ><Spinner loading={loading} /></div>) 
    :
    (<div
      className="max-w-6xl px-4 py-8 mx-auto"
    >
      <section className="flex flex-col gap-10">
        {[...data].reverse().map((news) => (
         <NewsPop news={news} key={news.id} />
        ))}
      </section>
    </div>) }</div>
  );
};
/* http://192.168.255.184:8000 */
export default NewsContent;

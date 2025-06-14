import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import newsHero from '../../public/assets/images/newsHero.png'
import { Link } from 'react-router-dom';


const Hero = ({ title='The news we bring', subtitle='like on Business, Sports, Politics'}) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <main className="max-w-6xl px-4 py-8 mx-auto widescreen:section-min-height tallscreen:section-min-height">
      <section className="relative flex flex-col items-center justify-between gap-10 p-6 bg-white rounded-lg shadow-md md:flex-row dark:bg-black">
        <div 
          className="w-full space-y-4 text-center md:w-1/2 md:text-left"
          data-aos="fade-right"
        >
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            {title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {subtitle}
          </p>
          <Link 
            to="/news"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white transition bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read More
            {/* the svg is  */}
            <svg className="w-4 h-4 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </Link>
        </div>

        <div 
          className="w-full md:w-1/2" 
          data-aos="fade-left"
        >
          <img 
            src={newsHero}
            alt="News Hero" 
            className="object-cover w-full rounded-lg shadow-sm" 
          />
        </div>
      </section>
    </main>
  );
};

export default Hero;

import React, { useState } from 'react';
// import logo from '../assets/logo.png'; // Optional logo import
import { Menu, X } from 'lucide-react'; // Hamburger and close icons (install lucide-react)
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({isActive})=>
    isActive ? 'bg-white text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2': 'text-white hover:text-gray-300 rounded-md px-3 py-2'
  
  
  return (
    <header className="sticky top-0 z-50 text-white bg-black shadow-md">
      <div className="flex items-center justify-between h-16 max-w-6xl px-4 mx-auto">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold tracking-wider">
          {/* <img src={logo} alt="Logo" className="h-8" /> */}
          NeWs
        </div>

        {/* Desktop Menu */}
        <nav className="hidden gap-6 text-lg font-medium md:flex">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/news" className={linkClass}>World</NavLink>
          <NavLink to="kk" className={linkClass}>Business</NavLink>
          <NavLink to="mmm" className={linkClass}>Tech</NavLink>
          <NavLink to="/addnews" className={linkClass}>Add News</NavLink>
          <NavLink to="/adduser" className={linkClass}>Add User</NavLink>
        </nav>

        {/* Hamburger Toggle */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen((menuOpen)=>!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="items-center px-4 py-3 space-y-2 text-lg text-center bg-black md:hidden">
          <Link to="/" className="block border-white border-b-[0.5px] hover:text-gray-300 leading-[3rem]">Home</Link>
          <Link to="/news" className="block hover:text-gray-300 leading-[3rem] border-b-[0.5px]">World</Link>
          <Link to="#" className="block hover:text-gray-300 leading-[3rem] border-b-[0.5px]">Business</Link>
          <Link to="/adduser" className="block hover:text-gray-300 leading-[3rem] border-b-[0.5px]">Add User</Link>
          <Link to="/addnews" className="block hover:text-gray-300 leading-[3rem] border-b-[0.5px]">Add News</Link>
        </nav>
      )}
    </header>
  );
};

export default NavBar;

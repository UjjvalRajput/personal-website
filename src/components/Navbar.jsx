import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { GrDocumentPdf } from "react-icons/gr";
import { FaMedium } from "react-icons/fa6";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const location = useLocation();

  // Close mobile menu on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setNav(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50'>
    {/* Menu */}
    <ul className='hidden md:flex ms-auto'>
      <li className='relative group py-6 w-32'>
        <a href='/' className='relative text-gray-300 hover:text-[#ff8383] pb-2 text-lg md:text-xl lg:text-2xl font-Serif'>
          Home
          <span className='absolute left-0 bottom-0 h-1 w-0 bg-[#ff8383] transition-all duration-300 group-hover:w-full'></span>
        </a>
      </li>
      <li className='relative group py-6 text-2xl w-32'>
        <a href='/about' className='relative text-gray-300 hover:text-[#ff8383] pb-2 text-lg md:text-xl lg:text-2xl font-Serif'>
          About
          <span className='absolute left-0 bottom-0 h-1 w-0 bg-[#ff8383] transition-all duration-300 group-hover:w-full'></span>
        </a>
      </li>
      <li className='relative group py-6 text-2xl w-32'>
        <a href='/projects' className='relative text-gray-300 hover:text-[#ff8383] pb-2 text-lg md:text-xl lg:text-2xl font-Serif'>
          Projects
          <span className='absolute left-0 bottom-0 h-1 w-0 bg-[#ff8383] transition-all duration-300 group-hover:w-full'></span>
        </a>
      </li>
    </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
      <li className='relative group py-6 text-3xl'>
        <a href='/' className='relative text-gray-300 hover:text-[#ff8383] pb-2 font-Serif'>
          Home
          <span className='absolute left-0 bottom-0 h-1 w-0 bg-[#ff8383] transition-all duration-300 group-hover:w-full'></span>
        </a>
      </li>
      <li className='relative group py-6 text-3xl'>
        <a href='/about' className='relative text-gray-300 hover:text-[#ff8383] pb-2 font-Serif'>
          About
          <span className='absolute left-0 bottom-0 h-1 w-0 bg-[#ff8383] transition-all duration-300 group-hover:w-full'></span>
        </a>
      </li>
      <li className='relative group py-6 text-3xl'>
        <a href='/projects' className='relative text-gray-300 hover:text-[#ff8383] pb-2 font-Serif'>
          Projects
          <span className='absolute left-0 bottom-0 h-1 w-0 bg-[#ff8383] transition-all duration-300 group-hover:w-full'></span>
        </a>
      </li>
      {/* Mobile social icons */}
      {['/', '/about', '/projects'].includes(location.pathname) && (
        <div className='flex flex-col items-center mt-6 space-y-4'>
          <a href='https://www.linkedin.com/in/ujjval-dr/' target='_blank' rel='noopener noreferrer' className='transition duration-300 transform hover:opacity-75'>
            <FaLinkedin size={40} />
          </a>
          <a href='https://github.com/UjjvalRajput' target='_blank' rel='noopener noreferrer' className='transition duration-300 transform hover:opacity-75'>
            <FaGithub size={40} />
          </a>
          <a href='https://medium.com/@ujjval.rajput' target='_blank' rel='noopener noreferrer' className='transition duration-300 transform hover:opacity-75'>
            <FaMedium size={40} />
          </a>
          <a href='mailto:ujjval.rajput@mail.utoronto.ca' className='transition duration-300 transform hover:opacity-75'>
            <HiOutlineMail size={40} />
          </a>
          <a href={`${process.env.PUBLIC_URL}/UjjvalRajputResume.pdf`} target='_blank' rel='noopener noreferrer' className='transition duration-300 transform hover:opacity-75'>
            <GrDocumentPdf size={40} />
          </a>
        </div>
      )}
      </ul>
      {/* Social icons */}
      {location.pathname === '/' && (
        <div className='hidden md:flex fixed bottom-8 left-1/2 transform -translate-x-1/2'>
          <ul className='flex space-x-4'>
            <li className='flex items-center justify-center w-20 h-20 bg-transparent rounded-md transition duration-300 transform hover:opacity-75'>
              <a
                className='flex justify-center items-center w-full h-full text-gray-300'
                href='https://www.linkedin.com/in/ujjval-dr/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedin size={32} />
              </a>
            </li>
            <li className='flex items-center justify-center w-20 h-20 bg-transparent rounded-md transition duration-300 transform hover:opacity-75'>
              <a
                className='flex justify-center items-center w-full h-full text-gray-300'
                href='https://github.com/UjjvalRajput'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub size={32} />
              </a>
            </li>
            <li className='flex items-center justify-center w-20 h-20 bg-transparent rounded-md transition duration-300 transform hover:opacity-75'>
              <a
                className='flex justify-center items-center w-full h-full text-gray-300'
                href='https://medium.com/@ujjval.rajput'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaMedium size={32} />
              </a>
            </li>
            <li className='flex items-center justify-center w-20 h-20 bg-transparent rounded-md transition duration-300 transform hover:opacity-75'>
              <a
                className='flex justify-center items-center w-full h-full text-gray-300'
                href='mailto:ujjval.rajput@mail.utoronto.ca'
              >
                <HiOutlineMail size={32} />
              </a>
            </li>
            <li className='flex items-center justify-center w-20 h-20 bg-transparent rounded-md transition duration-300 transform hover:opacity-75'>
              <a
                className='flex justify-center items-center w-full h-full text-gray-300'
                href={`${process.env.PUBLIC_URL}/UjjvalRajputResume.pdf`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <GrDocumentPdf size={32} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

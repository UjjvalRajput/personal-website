import React from 'react';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#d4d4d4] font-Slab'>
          Hello, I'm Ujjval.
        </h1>
        <h2 className='pt-12 text-3xl sm:text-3xl md:text-3xl font-medium text-[#ff8383]'>
          I'm a student studying Computer Science at the University of Toronto.
        </h2>
        <p className='text-[#d4d4d4] text-base sm:text-xl md:text-xl py-5 max-w-[800px] font-light'>
          They say "<span className='font-semibold italic font-Handwritten'>home is where the heart is</span>," and for me, this site is where my professional journey finds its place.
        </p>
      </div>
    </div>
  );
};

export default Home;

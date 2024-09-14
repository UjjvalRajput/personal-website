import React from 'react';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#d4d4d4] font-Slab'>
          Ujjval Rajput
        </h1>
        <h2 className='pt-12 text-3xl sm:text-3xl md:text-3xl font-medium text-[#ff8383]'>
          Computer Science student at the University of Toronto.
        </h2>
      </div>
    </div>
  );
};

export default Home;

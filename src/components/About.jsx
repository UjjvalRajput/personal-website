import React from 'react';


const About = () => {
  return (
    <div className='w-full min-h-screen bg-[#0a192f] text-white pt-28'>
      <div className='max-w-[1000px] mx-auto p-8 flex flex-col justify-center h-full rounded-lg shadow-lg'>
        <div className='text-center pb-10'>
          <p className='text-5xl font-bold font-Serif'>About</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
          <div className='sm:text-right text-4xl font-semibold font-Slab'>
            <p>I'm Ujjval Rajput</p>
          </div>
          <div className='font-Sans'>
            <p className='pb-5 transition duration-300'>
            My primary focus is on web and user-centric software development, with a growing curiosity about cloud technologies and their impact on scalable solutions.
            </p>
            <p className='pb-5 transition duration-300'>
              I am continually exploring cutting-edge technologies and embarking on diverse <a href='/projects' className='text-[#ff8383] hover:underline'>projects</a>.
            </p>
            <p className='pb-5 transition duration-300'>
            I am also committed to helping others through both <a href='/Ujjval-AIU-SA-Quote.png' className='text-[#ff8383] hover:underline' target='_blank' rel='noopener noreferrer'>mentorship</a> and <a href='https://www.utm.utoronto.ca/rgasc/undergraduate-students/facilitated-study-groups-fsgs' className='text-[#ff8383] hover:underline' target='_blank' rel='noopener noreferrer'>volunteerism</a>.
            </p>
            <p className='pb-5 transition duration-300'>
              I am looking for Summer 2025 internships and I would love to <a href='/' className='text-[#ff8383] hover:underline'>get in touch</a>!
            </p>
            <p className='pb-5 transition duration-300'>
              Outside of my professional life, I enjoy painting, travel, and twenty20 cricket.
            </p>
          </div>
        </div>
        <div className='text-center pb-8 mt-10'>
          <p className='text-4xl font-bold font-Serif'>Skills</p>
        </div>
        {['Languages', 'Frameworks & Libraries', 'Databases', 'Tools'].map((category, index) => (
          <div key={index} className='grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>{category}</p>
            </div>
            <div className='flex flex-wrap gap-4 font-semibold'>
              {category === 'Languages' && ['Python', 'Java', 'C', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'SQL', 'GraphQL', 'Assembly (RISK-V 32-bit)', 'Bash', 'R', 'LaTeX'].map((lang) => (
                <button className='px-4 py-2 bg-[#ff8383] text-white rounded-lg transition duration-300 hover:bg-[#e06565]' key={lang}>{lang}</button>
              ))}
              {category === 'Frameworks & Libraries' && ['React', 'Next.js', 'Node.js', 'Express.js', 'JavaFX', 'JUnit', 'Tkinter', 'Pytest', 'Hypothesis', 'NLTK', 'NumPy', 'Pandas', 'Matplotlib', 'Pygame'].map((lib) => (
                <button className='px-4 py-2 bg-[#ff8383] text-white rounded-lg transition duration-300 hover:bg-[#e06565]' key={lib}>{lib}</button>
              ))}
              {category === 'Databases' && ['MongoDB', 'SQLite3', 'PostgreSQL'].map((db) => (
                <button className='px-4 py-2 bg-[#ff8383] text-white rounded-lg transition duration-300 hover:bg-[#e06565]' key={db}>{db}</button>
              ))}
              {category === 'Tools' && ['GitHub', 'GitLab', 'GDB', 'Vim', 'Tableau', 'Power BI', 'Figma', 'Adobe XD', 'Adobe InDesign', 'ArcGIS Pro', 'ERDAS', 'Maya', 'Unity'].map((tool) => (
                <button className='px-4 py-2 bg-[#ff8383] text-white rounded-lg transition duration-300 hover:bg-[#e06565]' key={tool}>{tool}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

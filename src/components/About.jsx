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
            <p>Ujjval Rajput</p>
          </div>
          <div className='font-Sans'>
            <p className='pb-5 transition duration-300 hover:text-[#ff8383]'>
              I find joy in breaking down challenges and crafting effective solutions through code.
            </p>
            <p className='pb-5 transition duration-300 hover:text-[#ff8383]'>
              Continually exploring cutting-edge technologies and embarking on diverse <a href='/projects' className='text-[#ff8383] hover:underline'>projects</a>, I thrive on the thrill of innovation and problem-solving.
            </p>
            <p className='pb-5 transition duration-300 hover:text-[#ff8383]'>
              I am also committed to helping others through both mentorship and community volunteerism.
            </p>
            <p className='pb-5 transition duration-300 hover:text-[#ff8383]'>
              Outside of my professional life, I enjoy painting, travel, and twenty20 cricket.
            </p>
            <p className='pb-5 transition duration-300 hover:text-[#ff8383]'>
              Enrolled in the PEY/Co-op program, I eagerly seek internship opportunities to apply my skills in real-world scenarios.
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

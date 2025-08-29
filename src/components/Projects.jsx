import React, { useState } from "react";
import { data } from "../data/data.js";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = data;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full min-h-screen bg-[#0a192f] text-gray-100 pt-16">
      <div className="max-w-[1000px] mx-auto p-20 flex flex-col justify-center h-full">
        <div className="text-center pb-10">
          <p className="text-5xl font-bold font-Serif">Projects</p>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((item, index) => (
            <motion.div
              key={index}
              className="shadow-lg group rounded-md overflow-hidden bg-[#172a45] relative flex flex-col justify-between transition-all duration-150"
              style={{ minHeight: "320px" }}
              variants={cardVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              animate={{
                opacity:
                  hoveredIndex === null ? 1 : hoveredIndex === index ? 1 : 0.3,
                scale: hoveredIndex === index ? 1.05 : 1,
                boxShadow:
                  hoveredIndex === index
                    ? "0 0 25px rgba(255, 131, 131, 0.6)"
                    : "0 0 0 rgba(0,0,0,0)",
                transition: { duration: 0.15 },
              }}
            >
              <div className="p-4">
                <h2 className="text-xl font-bold text-white mb-2">
                  {item.name}
                </h2>
                <p className="text-gray-400 font-medium transition duration-300 group-hover:text-[#ff8383]">
                  {item.description}
                </p>
              </div>

              <div className="mb-4 p-4">
                <p className="text-gray-300 font-semibold">{item.techStack}</p>
              </div>

              <div className="p-4 bg-[#0f1d38] flex justify-center space-x-4 mt-auto">
                {item.show && (
                  <a href={item.show} target="_blank" rel="noopener noreferrer">
                    <button className="rounded-lg px-4 py-2 bg-[#ff8383] text-gray-100 font-bold hover:bg-[#f45c5c] hover:text-white transition duration-300">
                      Demo
                    </button>
                  </a>
                )}
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="rounded-lg px-4 py-2 bg-[#ff8383] text-gray-100 font-bold hover:bg-[#f45c5c] hover:text-white transition duration-300">
                      GitHub
                    </button>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

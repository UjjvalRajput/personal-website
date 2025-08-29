import React, { useState } from "react";
import { data } from "../data/data.js";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const cardVariants = {
  hover: {
    scale: 1.05,
    rotateX: 2,
    rotateY: -2,
    boxShadow: "0px 8px 25px rgba(255, 131, 131, 0.3)",
    transition: { type: "spring", stiffness: 200, damping: 10 },
  },
  tap: { scale: 0.97 },
};

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.div
      className="w-full min-h-screen bg-[#0a192f] text-white pt-28"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-[1200px] mx-auto p-8 flex flex-col gap-10 h-full">
        {/* Title */}
        <motion.div variants={fadeInUp} className="text-center">
          <h1 className="text-5xl font-bold font-Serif">Projects</h1>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          variants={staggerContainer}
        >
          {data.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedIndex(index)}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              variants={fadeInUp}
              whileHover={cardVariants.hover}
              whileTap={cardVariants.tap}
              animate={{
                opacity:
                  hoveredIndex === null ? 1 : hoveredIndex === index ? 1 : 0.3, // fade other cards
                filter:
                  hoveredIndex === null
                    ? "blur(0px)"
                    : hoveredIndex === index
                    ? "blur(0px)"
                    : "blur(1px)", // slight blur on non-hovered
              }}
              className={`cursor-pointer rounded-lg overflow-hidden bg-[#172a45] flex flex-col justify-between transition-all duration-150`}
              style={{ minHeight: "320px" }}
            >
              <div className="p-4">
                <p className="text-xl font-bold text-[#ff8383]">
                  {project.name}
                </p>
                <p className="text-gray-400 font-medium">
                  {project.description}
                </p>
              </div>

              <div className="mb-4 p-4">
                <p className="text-gray-300 font-semibold">
                  {project.techStack}
                </p>
              </div>

              <div className="p-4 bg-[#0f1d38] flex justify-center space-x-4 mt-auto">
                {project.show && (
                  <a
                    href={project.show}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-lg px-4 py-2 bg-[#ff8383] text-white font-bold hover:bg-[#f45c5c] transition duration-300"
                    >
                      Demo
                    </motion.button>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-lg px-4 py-2 bg-[#ff8383] text-white font-bold hover:bg-[#f45c5c] transition duration-300"
                    >
                      GitHub
                    </motion.button>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Selected project details */}
        <AnimatePresence mode="wait">
          {selectedIndex !== null && (
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 150, damping: 15 },
              }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              className="bg-[#112240] p-6 rounded-lg shadow-lg mt-8"
            >
              <p className="text-2xl font-bold text-[#ff8383] mb-2">
                {data[selectedIndex].name}
              </p>
              <p className="text-lg text-gray-400 mb-2">
                {data[selectedIndex].description}
              </p>
              <p className="text-sm text-gray-400 mb-4">
                Tech Stack: {data[selectedIndex].techStack}
              </p>
              <div className="flex space-x-4">
                {data[selectedIndex].show && (
                  <a
                    href={data[selectedIndex].show}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="rounded-lg px-4 py-2 bg-[#ff8383] text-white font-bold hover:bg-[#f45c5c] transition duration-300">
                      Demo
                    </button>
                  </a>
                )}
                {data[selectedIndex].github && (
                  <a
                    href={data[selectedIndex].github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="rounded-lg px-4 py-2 bg-[#ff8383] text-white font-bold hover:bg-[#f45c5c] transition duration-300">
                      GitHub
                    </button>
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Projects;

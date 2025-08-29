import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    company: "Arcadis",
    location: "Toronto, ON",
    role: "Software Analyst Co-op",
    date: "September 2025 - August 2026",
    bullets: ["Joining the CurbIQ Team"],
  },
  {
    company: "Lumentum",
    location: "Ottawa, ON",
    role: "Software Engineering Intern - Metrology",
    date: "Jan 2025 – Apr 2025",
    bullets: [
      "Contributed to Lumentum’s new metrology product line department, supporting high-precision measurement sensors with real-time software infrastructure.",
      "Led the end-to-end design and implementation of a multi-threaded event-driven system in Rust to replace polling, drastically improving GUI responsiveness and synchronizing real-time sensor interactions with low latency.",
      "Developed a real-time sensor metrics dashboard in React (TypeScript), gRPC, and Protobuf for live data streaming and visualization, with seamless CLI-based headless access for advanced operator workflows.",
      "Implemented a caching strategy to accelerate the processing and rendering of million-point cloud datasets, improving throughput and reducing latency in high-resolution 3D visualizations.",
    ],
  },
  {
    company: "Lumentum",
    location: "Ottawa, ON",
    role: "Software Engineering Intern - Process Automation Software",
    date: "Apr 2025 – Aug 2025",
    bullets: [
      "Part of a cross-functional team modernizing Lumentum’s internal test framework used across over 200 engineering projects.",
      "Redesigned an internal tool using React (TypeScript), Rust, and Tauri to streamline recipe execution for operators at global Lumentum sites, integrating with backend services via gRPC, enabling a platform-agnostic UI.",
      "Implemented robust integration testing strategies using mock layers to validate functionality before connecting to real services, ensuring high-quality design and architecture.",
      "Developed dynamic recipe prompts capable of displaying files (images, PDFs, etc.) in real-time via gRPC streaming for improved operator workflow.",
    ],
  },
  {
    company: "Lumentum",
    location: "Ottawa, ON",
    role: "Software Engineering Intern - Embedded DevSecOps",
    date: "Apr 2025 – Aug 2025",
    bullets: [
      "Enhanced CI/CD pipelines by developing features that improved build visibility, automation, and developer efficiency within a large-scale codebase.",
      "Engineered automated processes for pull request handling and artifact management, reducing manual workload and streamlining releases.",
      "Implemented secure pipeline components using OAuth2 authentication, replacing older SMTP based solutions, strengthening CI/CD security practices.",
      "Integrated CI workflows with issue tracking systems to provide real-time updates, improving traceability and debugging across teams.",
    ],
  },
  {
    company: "Concur",
    location: "Remote",
    role: "Software Engineering Intern",
    date: "July 2024 – Oct 2024",
    bullets: [
      "Engineered JavaScript obfuscation techniques to enhance SDK security, leading to increased protection against unauthorized access and ensuring compliance with industry standards.",
      "Developed core React components for the Concur web platform, elevating UX in collaboration with the design team.",
    ],
  },
  {
    company: "University of Toronto",
    location: "Toronto, ON",
    role: "FSG Leader, CSC108 - Computer Programming",
    date: "Aug 2023 – Dec 2023",
    bullets: [
      "Led sessions in Python for a university undergraduate course, focused on data structures and algorithmic efficiency, troubleshooting, and debugging, resulting in an average grade increase of 15%.",
    ],
  },
  {
    company: "CVDSA - Heart & Stroke Foundation",
    location: "University of Toronto",
    role: "Development Committee Member - Software Developer",
    date: "Sep 2024 - Apr 2025",
    bullets: [
      "Collaborated with a team to design a new website for the organization; project is currently in progress.",
      {
        text: "Learn more",
        link: "https://sop.utoronto.ca/group/heart-and-stroke-foundation-hsf-st-george-",
      },
    ],
  },
];

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

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <motion.div
      className="w-full min-h-screen bg-[#0a192f] text-white pt-28"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-[1200px] mx-auto p-8 flex flex-col xl:flex-row gap-10 h-full">
        {/* Left Section */}
        <motion.div
          className="xl:w-1/3 flex flex-col space-y-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-5xl font-bold font-Serif text-center xl:text-left"
            variants={fadeInUp}
          >
            Experience
          </motion.h1>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedIndex(index)}
              variants={fadeInUp}
              whileHover={cardVariants.hover}
              whileTap={cardVariants.tap}
              className={`cursor-pointer px-4 py-3 rounded-lg transition-all duration-150 ${
                selectedIndex === index
                  ? "bg-[#ff8383]/20 shadow-lg shadow-[#ff8383]/30"
                  : "hover:bg-[#ff8383]/10"
              }`}
            >
              <p className="text-xl font-bold text-[#ff8383]">{exp.company}</p>
              <p className="text-sm italic text-gray-400">{exp.location}</p>
              <p className="text-base font-semibold">{exp.role}</p>
              <p className="text-xs text-gray-400">{exp.date}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Section */}
        <motion.div className="xl:w-2/3">
          <AnimatePresence mode="wait">
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
              className="bg-[#112240] p-6 rounded-lg shadow-lg min-h-[400px]"
            >
              <p className="text-2xl font-bold text-[#ff8383] mb-2">
                {experiences[selectedIndex].company}
              </p>
              <p className="text-lg italic text-gray-400 mb-2">
                {experiences[selectedIndex].location}
              </p>
              <p className="text-lg font-semibold mb-2">
                {experiences[selectedIndex].role}
              </p>
              <p className="text-sm text-gray-400 mb-4">
                {experiences[selectedIndex].date}
              </p>

              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
                className="list-disc list-inside space-y-2"
              >
                {experiences[selectedIndex].bullets.map((bullet, idx) => (
                  <motion.li
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4 },
                      },
                    }}
                    className="text-white"
                  >
                    {typeof bullet === "string" ? (
                      bullet
                    ) : (
                      <a
                        href={bullet.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ff8383] hover:underline"
                      >
                        {bullet.text}
                      </a>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;

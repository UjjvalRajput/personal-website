import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const languages = [
    "Python",
    "Java",
    "Rust",
    "C",
    "JavaScript",
    "TypeScript",
    "C#",
    "SQL",
    "GraphQL",
    "Assembly (RISC-V 32-bit)",
    "Bash",
    "R",
    "LaTeX",
  ];

  const frameworks = [
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    ".NET Framework",
    "JavaFX",
    "JUnit",
    "Tkinter",
    "Pytest",
    "Hypothesis",
    "NLTK",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Pygame",
  ];

  const databases = ["MongoDB", "SQLite3", "PostgreSQL"];

  const tools = [
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Github Actions",
    "Docker",
    "Jenkins",
    "Box",
    "NUnit",
    "Confluence",
    "Jira",
    "Linux",
    "Figma",
    "Adobe XD",
    "Adobe InDesign",
    "ArcGIS Pro",
    "ERDAS",
    "Maya",
    "Unity",
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const fadeInImage = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 10 },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  return (
    <div className="w-full min-h-screen bg-[#0a192f] text-white pt-28">
      <div className="max-w-[1000px] mx-auto p-8 flex flex-col justify-center h-full rounded-lg shadow-lg">
        {/* Title */}
        <motion.div
          className="text-center pb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-5xl font-bold font-Serif">About</p>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          {/* Left: Name & Photo */}
          <motion.div
            className="sm:text-right text-4xl font-semibold font-Slab flex flex-col items-center sm:items-end"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p>I'm Ujjval Rajput</p>
            <motion.img
              src="/Me.jpg"
              alt="Ujjval Rajput"
              className="mt-4 w-64 h-64 rounded-full border-4 border-[#ff8383] object-cover shadow-lg"
              variants={fadeInImage}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 40px rgba(255, 131, 131, 0.7)",
              }}
              transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
            />
          </motion.div>

          {/* Right: About Text */}
          <motion.div
            className="font-Sans space-y-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              <>
                My focus is on user and business-centric development with a
                growing interest in cloud technologies. I have worked as a
                software engineering fellow at{" "}
                <a
                  href="https://www.concur.live/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff8383] hover:underline"
                >
                  startups
                </a>
                ,{" "}
                <a
                  href="https://www.lumentum.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff8383] hover:underline"
                >
                  large companies
                </a>
                , and{" "}
                <a
                  href="https://sop.utoronto.ca/group/heart-and-stroke-foundation-hsf-st-george-chapter/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff8383] hover:underline"
                >
                  university-led programs
                </a>
                .
              </>,
              <>
                I am also committed to helping others through both{" "}
                <a
                  href="/Ujjval-AIU-SA-Quote.png"
                  className="text-[#ff8383] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mentorship
                </a>{" "}
                and{" "}
                <a
                  href="https://www.utm.utoronto.ca/rgasc/undergraduate-students/facilitated-study-groups-fsgs"
                  className="text-[#ff8383] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  volunteerism
                </a>
                .
              </>,
              <>
                I am exploring new grad opportunities and would love to{" "}
                <a href="/" className="text-[#ff8383] hover:underline">
                  connect
                </a>
                !
              </>,
              <>
                Outside of my professional life, I enjoy painting and Twenty20
                cricket.
              </>,
            ].map((para, idx) => (
              <motion.p key={idx} variants={fadeInUp}>
                {para}
              </motion.p>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="text-center pb-8 mt-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-4xl font-bold font-Serif">Skills</p>
        </motion.div>

        {[
          { category: "Languages", items: languages },
          { category: "Frameworks & Libraries", items: frameworks },
          { category: "Databases", items: databases },
          { category: "Tools", items: tools },
        ].map(({ category, items }, index) => (
          <motion.div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="sm:text-right text-4xl font-bold"
              variants={fadeInUp}
            >
              <p>{category}</p>
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-4 font-semibold"
              variants={staggerContainer}
            >
              {items.map((skill, idx) => (
                <motion.button
                  key={idx}
                  className="px-4 py-2 bg-[#ff8383] text-white rounded-lg"
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 6px 20px rgba(255, 112, 112, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  {skill}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;

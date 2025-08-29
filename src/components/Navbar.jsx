import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { FaMedium } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const location = useLocation();

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin size={32} />,
      href: "https://www.linkedin.com/in/UjjvalRajput",
    },
    { icon: <FaGithub size={32} />, href: "https://github.com/UjjvalRajput" },
    { icon: <FaMedium size={32} />, href: "https://medium.com/@ujjval.rajput" },
    {
      icon: <HiOutlineMail size={32} />,
      href: "mailto:ujjval.rajput@mail.utoronto.ca",
    },
    {
      icon: <GrDocumentPdf size={32} />,
      href: `${process.env.PUBLIC_URL}/Ujjval-Rajput-Resume.pdf`,
    },
  ];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50">
      {/* Desktop Menu */}
      <ul className="hidden md:flex ml-auto space-x-8">
        {navItems.map((item) => (
          <li key={item.name} className="relative group py-6">
            <a
              href={item.path}
              className={`relative text-xl font-Serif pb-2 ${
                location.pathname === item.path
                  ? "text-[#ff8383]"
                  : "text-gray-300"
              } hover:text-[#ff8383]`}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-1 w-0 bg-[#ff8383] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-50 cursor-pointer">
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center">
          <ul className="space-y-8 text-center">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className={`text-3xl font-Serif ${
                    location.pathname === item.path
                      ? "text-[#ff8383]"
                      : "text-gray-300"
                  } hover:text-[#ff8383]`}
                  onClick={() => setNav(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-6 mt-10">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:opacity-75"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Social Icons */}
      {location.pathname === "/" && (
        <div className="hidden md:flex fixed bottom-8 left-1/2 transform -translate-x-1/2 space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:opacity-75"
            >
              {link.icon}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;

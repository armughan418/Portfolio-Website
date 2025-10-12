import React, { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { BsThreeDotsVertical } from "react-icons/bs";
import "../css-files/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navLinks = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Academics", to: "acadamics" },
    { label: "Tools & Technologies", to: "tools" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#1a0024] via-[#320979] to-[#240066] shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3">
        {/* Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-60}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src="./images/logo1.png"
            alt="Logo"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover bg-yellow-500 p-[2px]"
          />
          <span className="font-semibold text-2xl text-white">
            Armughan’s{" "}
            <span className="text-yellow-400 text-2xl">Portfolio</span>
          </span>
        </ScrollLink>

        {/* Desktop Links */}
        <ul className="nav-links hidden md:flex gap-6 lg:gap-8 text-white font-medium">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group cursor-pointer">
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                offset={-60}
                className="transition-colors duration-300 group-hover:text-yellow-400"
              >
                {link.label}
              </ScrollLink>
              {/* Underline expands from center */}
              <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-500 ease-in-out transform -translate-x-1/2 origin-center group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Hire Me Button (Desktop) */}
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-60}
          className="hidden md:inline-block hire-btn px-4 py-2 lg:px-5 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-all duration-300 cursor-pointer"
        >
          Hire Me
        </ScrollLink>

        {/* 3 Dots Menu (Mobile) */}
        <div className="dots-menu md:hidden relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            <BsThreeDotsVertical />
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div
              className="absolute right-0 mt-3 w-44 rounded-xl shadow-lg py-2 z-50 
              bg-gradient-to-br from-[#2a0050] via-[#3b0a7a] to-[#1a0035] 
              backdrop-blur-md border border-white/10 animate-slideDown"
            >
              {navLinks.map((link, index) => (
                <ScrollLink
                  key={index}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-60}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-white hover:bg-yellow-400 hover:text-black transition-all duration-200 rounded-lg"
                >
                  {link.label}
                </ScrollLink>
              ))}
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-60}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 mt-1 text-sm text-center font-semibold bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-all duration-200"
              >
                Hire Me
              </ScrollLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

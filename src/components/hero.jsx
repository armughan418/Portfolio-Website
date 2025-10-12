import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiDownloadCloud } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

function Hero() {
  const [currentText, setCurrentText] = useState("");

  const texts = ["MERN Stack Developer", "Programmer & Coder"];
  let index = 0;
  let charIndex = 0;
  let deleting = false;

  useEffect(() => {
    const typingEffect = setInterval(() => {
      const current = texts[index];

      if (!deleting) {
        setCurrentText(current.substring(0, charIndex + 1));
        charIndex++;

        if (charIndex === current.length) {
          deleting = true;
          setTimeout(() => {}, 1000);
        }
      } else {
        setCurrentText(current.substring(0, charIndex - 1));
        charIndex--;

        if (charIndex === 0) {
          deleting = false;
          index = (index + 1) % texts.length;
        }
      }
    }, 150);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0f0020] via-[#2a0770] to-[#16004e] text-white px-6 overflow-visible"
    >
      {/* Background glowing circles (fixed: pointer-events-none) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>

      {/* Container aligned with Navbar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-48 py-10 px-4 md:px-8"
      >
        {/* Text Section (z-20 for click priority) */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative z-20 w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Hi, I'm <span className="text-yellow-400">Armughan</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200 h-10">
            <span className="border-r-2 border-yellow-400 pr-1">
              {currentText}
            </span>
          </h2>
          <p className="text-gray-300 max-w-lg leading-relaxed text-lg sm:text-xl mx-auto lg:mx-0">
            I’m a passionate Full-Stack Developer (MERN). I love building
            modern, fast, and dynamic web experiences.
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-6"
          >
            <button
              onClick={() => window.open("../files/CV.pdf", "_blank")}
              className="flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black font-medium px-7 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              <FiDownloadCloud size={22} />
              Download CV
            </button>

            <button
              onClick={() =>
                window.open("https://github.com/armughan418/", "_blank")
              }
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-medium px-7 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <FaGithub size={22} />
              View GitHub
            </button>
          </motion.div>
        </motion.div>

        {/* Image Section (lower z-index to avoid blocking) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative group cursor-pointer mt-10 lg:mt-0 w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-yellow-500 hover:scale-105 transition-transform duration-500">
            <img
              src="./images/my-photo2.png"
              alt="Armughan"
              className="w-full h-full object-cover object-center group-hover:brightness-110 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-full"></div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;

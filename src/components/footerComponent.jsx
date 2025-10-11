import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#2a0d5d] to-[#3b0a73] text-white py-6 border-t border-purple-700 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <div className="flex items-center justify-center text-purple-800 font-bold text-xl shadow-lg">
            <img
              src="./images/logo1.png"
              alt="colo"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover bg-yellow-500 p-[2px]"
            />
          </div>
          <span className="font-semibold text-2xl">
            Armughan’s{" "}
            <span className="text-yellow-400 text-2xl">Portfolio</span>
          </span>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-5 mt-4 md:mt-0"
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/armughan-javed/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#0A66C2] text-white hover:text-[#0A66C2] transition-all duration-300 hover:scale-110 shadow-md hover:shadow-[#0A66C2]/40"
          >
            <FaLinkedin size={22} />
            <span className="absolute inset-0 rounded-full bg-[#0A66C2]/0 hover:bg-[#0A66C2]/10 transition-all duration-300"></span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/armughan418"
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-black text-white hover:text-black transition-all duration-300 hover:scale-110 shadow-md hover:shadow-black/30"
          >
            <FaGithub size={22} />
            <span className="absolute inset-0 rounded-full bg-black/0 hover:bg-black/10 transition-all duration-300"></span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/923418609973"
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#25D366] text-white hover:text-[#25D366] transition-all duration-300 hover:scale-110 shadow-md hover:shadow-[#25D366]/40"
          >
            <FaWhatsapp size={22} />
            <span className="absolute inset-0 rounded-full bg-[#25D366]/0 hover:bg-[#25D366]/10 transition-all duration-300"></span>
          </a>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;

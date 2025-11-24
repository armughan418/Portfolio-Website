import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Project() {
  const projects = [
    {
      image: "./images/auth.png",
      title: "Authentication System",
      discription:
        "A MERN Stack Project that manages Login, Signup, and Password Reset with OTP verification via Email, protected using JWT Tokens. Built with MVC architecture.",
      hash1: "#React",
      hash2: "#Tailwind",
      hash3: "#MongoDB",
      hash4: "#Express",
      openLink: "https://github.com/armughan418/Authentication-System",
    },
    {
      image: "./images/eps.jpg",
      title: "School Management System",
      discription:
        "A complete platform for managing student records, generating challan forms, and tracking fee payments efficiently.",
      hash1: "#React",
      hash2: "#Tailwind",
      hash3: "#MongoDB",
      hash4: "#Express",
      openLink: "https://github.com/armughan418/EPS-MY_SMS",
    },
    {
      image: "./images/ecommerce.png",
      title: "Ecommerce System",
      discription:
        "A restaurant ecommerce platform with full CRUD operations and an Admin Dashboard for managing orders and products.",
      hash1: "#React",
      hash2: "#Bootstrap",
      hash3: "#MongoDB",
      hash4: "#Express",
      openLink: "https://github.com/armughan418/Ecommerce-Website",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-gradient-to-br from-[#120024] via-[#35097c] to-[#1a0048] text-white flex flex-col items-center px-6 py-20"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="font-extrabold text-4xl sm:text-5xl text-yellow-400 drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]">
          My Projects
        </h1>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-yellow-400 rounded mx-auto mt-5"
        ></motion.div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.1)] max-w-sm w-full group"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-3">
              <h2 className="text-2xl font-semibold text-yellow-400">
                {project.title}
              </h2>
              <p className="text-gray-200 text-sm leading-relaxed">
                {project.discription}
              </p>

              <div className="flex flex-wrap gap-2 mt-2 text-xs sm:text-sm">
                <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300">
                  {project.hash1}
                </span>
                <span className="bg-yellow-500/20 px-3 py-1 rounded-full text-yellow-300">
                  {project.hash2}
                </span>
                <span className="bg-pink-500/20 px-3 py-1 rounded-full text-pink-300">
                  {project.hash3}
                </span>
                <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300">
                  {project.hash4}
                </span>
              </div>

              {/* Working GitHub Button */}
              <div className="relative z-50 mt-6">
                <a
                  href={project.openLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 rounded-full text-black font-semibold transition-all duration-300 shadow-md hover:shadow-yellow-500/30"
                >
                  <FaGithub className="w-5 h-5" />
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-yellow-400/40 transition-all duration-500"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Project;

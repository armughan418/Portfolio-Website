import React from "react";
import { motion } from "framer-motion";

const Academics = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0f0020] via-[#2a0770] to-[#16004e] text-white px-6 py-16 overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute top-24 left-16 w-72 h-72 bg-yellow-400/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-10 right-16 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] animate-pulse"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.3 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-12"
      >
        {/* Profile Picture */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-yellow-400 shadow-[0_0_25px_rgba(255,215,0,0.4)] mb-10 lg:mb-0 group"
        >
          <img
            src="./images/my-photo2.png"
            alt="Armughan"
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110 cursor-pointer"
          />
          <div className="absolute inset-0 rounded-full bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 flex flex-col items-center lg:items-center text-center lg:text-left space-y-6 px-2"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 drop-shadow-lg">
            About Me
          </h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1 bg-yellow-400 rounded self-center lg:self-center"
          ></motion.div>

          <p className="text-lg leading-relaxed text-gray-200 max-w-2xl">
            I’m <span className="text-yellow-400 font-medium">Armughan</span>,
            currently pursuing my{" "}
            <span className="font-semibold text-white">
              Bachelor of Science in Software Engineering (BSSE)
            </span>{" "}
            at the{" "}
            <span className="font-semibold text-white">
              University of Central Punjab (UCP), Lahore
            </span>
            . Alongside my degree, I have completed a{" "}
            <span className="text-yellow-400 font-medium">
              MERN Stack Web Development
            </span>{" "}
            course from Ideoversity Training Institute, located in{" "}
            <span className="font-semibold text-white">
              Arfa Karim Software Technology Park
            </span>
            . I’ve also completed a{" "}
            <span className="text-yellow-400 font-medium">Web Development</span>{" "}
            course under the{" "}
            <span className="font-semibold text-white">NAVTTC</span> program.
          </p>

          <p className="text-lg leading-relaxed text-gray-200 max-w-2xl">
            I completed my{" "}
            <span className="text-yellow-400 font-medium">
              Intermediate in Computer Science (ICS)
            </span>{" "}
            from{" "}
            <span className="font-semibold text-white">
              Punjab College of Information Technology (Main Campus)
            </span>
            , Lahore, and my{" "}
            <span className="text-yellow-400 font-medium">Matriculation</span>{" "}
            from{" "}
            <span className="font-semibold text-white">
              Freedom Grammar School
            </span>
            , Lahore.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Academics;

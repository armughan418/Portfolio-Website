import React, { useState } from "react";
import { motion } from "framer-motion";

function Tools() {
  const [selectedType, setSelectedType] = useState(null);

  const tools = [
    {
      imageURL: "../images/html.png",
      altText: "HTML",
      title: "HTML",
      type: "web",
    },
    {
      imageURL: "../images/css.webp",
      altText: "CSS",
      title: "CSS",
      type: "web",
    },
    {
      imageURL: "../images/js.png",
      altText: "JS",
      title: "JavaScript",
      type: "web",
    },
    {
      imageURL: "../images/react.png",
      altText: "ReactJS",
      title: "React JS",
      type: "web",
    },
    {
      imageURL: "../images/node.png",
      altText: "NodeJS",
      title: "Node JS",
      type: "web",
    },
    {
      imageURL: "../images/expressJS.png",
      altText: "ExpressJS",
      title: "Express JS",
      type: "web",
    },
    {
      imageURL: "../images/thumb.webp",
      altText: "Tailwind",
      title: "Tailwind CSS",
      type: "web",
    },
    {
      imageURL: "../images/Bootstrap.png",
      altText: "Bootstrap",
      title: "Bootstrap",
      type: "web",
    },
    {
      imageURL: "../images/mongoDB.webp",
      altText: "MongoDB",
      title: "MongoDB",
      type: "web",
    },
    {
      imageURL: "../images/mysql.png",
      altText: "MySQL",
      title: "MySQL",
      type: "web",
    },
    {
      imageURL: "../images/c.webp",
      altText: "C",
      title: "C Language",
      type: "others",
    },
    {
      imageURL: "../images/cpp.png",
      altText: "C++",
      title: "C++",
      type: "others",
    },
    {
      imageURL: "../images/java.png",
      altText: "JAVA",
      title: "JAVA",
      type: "others",
    },
  ];

  const filteredTools =
    selectedType === null
      ? tools
      : tools.filter((tool) => tool.type === selectedType);

  return (
    <section
      id="tools"
      className="min-h-screen bg-gradient-to-br from-[#10002b] via-[#320979] to-[#1b004e] px-6 py-20 flex flex-col items-center text-white"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]">
          Tools & Technologies
        </h1>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-yellow-400 rounded mx-auto mt-5"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {[
          { label: "All", type: null },
          { label: "Web Technologies", type: "web" },
          { label: "Others", type: "others" },
        ].map((btn) => (
          <motion.button
            key={btn.label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedType(btn.type)}
            className={`px-7 py-3 rounded-full font-medium border-2 text-sm sm:text-base transition-all duration-300
              ${
                selectedType === btn.type
                  ? "bg-yellow-400 text-black border-yellow-400 shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                  : "border-yellow-400 text-white hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]"
              }`}
          >
            {btn.label}
          </motion.button>
        ))}
      </div>

      {/* Tools Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10 place-items-center w-full max-w-6xl mx-auto"
      >
        {filteredTools.map((tool, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative group w-32 sm:w-36 h-36 sm:h-40 rounded-2xl bg-gradient-to-br from-[#1c0030] to-[#2e0075] border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center shadow-[0_0_25px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,215,0,0.25)] transition-all duration-500"
          >
            {/* Light Glow Border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-400/40 transition-all duration-500"></div>

            {/* Subtle Glow Animation */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1200ms] ease-in-out"></div>
            </div>

            {/* Image */}
            <div className="w-14 h-14 mb-3 flex items-center justify-center">
              <img
                src={tool.imageURL}
                alt={tool.altText}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Title */}
            <p className="text-yellow-300 font-medium text-sm text-center tracking-wide">
              {tool.title}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Tools;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center bg-gradient-to-br from-[#15002b] via-[#3b0a78] to-[#1d004e] relative overflow-hidden">
      {/* Floating Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_60%)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-10 max-w-xl"
      >
        <h1 className="text-6xl font-extrabold text-yellow-400 mb-4 drop-shadow-lg">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-white mb-3">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-200 mb-8">
          Hmm... It seems the page you’re looking for doesn’t exist or has been
          moved.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 text-lg font-medium text-white bg-yellow-500 rounded-full shadow-md hover:bg-yellow-400 transition-all duration-300"
        >
          Go Back Home
        </Link>
      </motion.div>

      {/* Soft bottom glow */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>
  );
}

export default NotFound;

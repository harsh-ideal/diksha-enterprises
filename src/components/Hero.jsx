import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative bg-gray-100">
      <div className="absolute inset-0">
        <img
          src="https://via.placeholder.com/1920x1080"
          alt="Diksha Enterprises"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white py-20 px-5">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Diksha Enterprises
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl max-w-2xl mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Your trusted partner for premium powder coating and phosphating services, ensuring quality and durability in every project.
        </motion.p>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="#services"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

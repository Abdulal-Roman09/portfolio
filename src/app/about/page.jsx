"use client"; // Next.js 13+ app directory এর জন্য

import React from "react";
import { FaCode, FaMobileAlt, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="md:h-screen flex items-center w-full h-fit md:w-screen">
        <div className="container mx-auto px-4">
          <section className="py-20 md:py-10">
            {/* Section Title */}
            <h2 className="text-4xl font-bold text-center mb-12">
              About Me
            </h2>

            {/* Flex Container */}
            <motion.div
              className="flex flex-col md:flex-row gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Text Content */}
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-4">
                  My Introduction
                </h3>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  🎓 BSc in CSE | Faridpur Engineering College <br />
                  🌱 Currently learning MERN Stack <br />
                  💼 Looking to collaborate on real-world MERN projects
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open source projects, or
                  sharing knowledge with the developer community.
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex items-center space-x-3">
                    <FaCode className="h-6 w-6 text-blue-500" />
                    <span>Clean Code</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <FaMobileAlt className="h-6 w-6 text-green-500" />
                    <span>Responsive</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <FaGlobe className="h-6 w-6 text-purple-500" />
                    <span>Web Standards</span>
                  </div>
                </div>
              </motion.div>

              {/* Image Content */}
              <motion.div
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img
                  src="https://i.ibb.co/V0SyTQ9L/70469.jpg"
                  alt="Workspace"
                  className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
                />
              </motion.div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;

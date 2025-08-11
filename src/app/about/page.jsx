import React from "react";
import { FaCode, FaPalette, FaMobileAlt, FaGlobe } from "react-icons/fa";

const About = () => {
  return (
    <section className="container mx-auto ">
      {/* About Section */}
      <div className="mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center px-3">
          {/* Text Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
              My Introduction
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              🎓 BSc in CSE | Faridpur Engineering College <br /> 🌱 Currently learning
              MERN Stack <br /> 💼 Looking to collaborate on real-world MERN projects
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source projects, or sharing knowledge with
              the developer community.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <FaCode className="h-6 w-6 text-blue-600" />
                <span className="text-slate-700 dark:text-slate-300">
                  Clean Code
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <FaMobileAlt className="h-6 w-6 text-teal-600" />
                <span className="text-slate-700 dark:text-slate-300">
                  Responsive
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaGlobe className="h-6 w-6 text-green-600" />
                <span className="text-slate-700 dark:text-slate-300">
                  Web Standards
                </span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://i.ibb.co/V0SyTQ9L/70469.jpg"
              alt="Workspace"
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

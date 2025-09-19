import React from "react";
import { FaGraduationCap, FaSchool, FaBullseye } from "react-icons/fa";

const Education = () => {
  return (
    <div className="md:h-screen flex items-center sticky md:w-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white h-fit px-4">
      <div className="container mx-auto py-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Education</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">My academic journey and qualifications</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-6">
          {/* Current Education */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 border border-gray-300 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-600/50">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <FaGraduationCap className="text-blue-600 w-6 h-6" />
                  <h3 className="text-xl font-semibold">Bachelor of Science in Engineering (BSc Engineering)</h3>
                </div>
                <p className="text-blue-400 mb-2 font-medium">Computer Science & Engineering</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Currently Pursuing</p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white shadow-lg">
                  In Progress
                </span>
              </div>
            </div>
            <div className="border-l-4 border-blue-600 pl-6 bg-gray-50 dark:bg-gray-900/50 rounded-r-lg p-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Pursuing a comprehensive degree in Computer Science & Engineering, focusing on software development,
                algorithms, data structures, and modern programming technologies.
              </p>
            </div>
          </div>

          {/* Completed Education */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 border border-gray-300 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-500/50">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <FaSchool className="text-blue-500 w-6 h-6" />
                  <h3 className="text-xl font-semibold">Higher Secondary Certificate (HSC)</h3>
                </div>
                <p className="text-blue-400 mb-2 font-medium">Science Group</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Completed</p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-500 text-white shadow-lg">
                  Completed
                </span>
              </div>
            </div>
            <div className="border-l-4 border-blue-500 pl-6 bg-gray-50 dark:bg-gray-900/50 rounded-r-lg p-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Successfully completed Higher Secondary Certificate with focus on Science subjects, building a strong
                foundation in mathematics, physics, and analytical thinking.
              </p>
            </div>
          </div>

          {/* Academic Goals */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-blue-600/30 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300/10 to-blue-300/10"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <FaBullseye className="text-blue-600 w-5 h-5" />
                <h3 className="text-xl font-semibold">Academic Goals</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently working towards completing my BSc Engineering degree in Computer Science, with a focus on
                full-stack development, software engineering principles, and emerging technologies. Committed to
                continuous learning and staying updated with industry trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

import React from "react";
import { CertificationCard } from "./CertificationCard"; // make sure the path is correct

const certifications = [
  {
    title: "React Developer",
    organization: "Udemy",
    dateObtained: "July 2025",
    description: "Completed a comprehensive React course covering Hooks, Redux, and project-based learning.",
    verificationLink: "https://www.udemy.com/certificate/react",
    skills: ["React", "Html", "JavaScript", "Css"],
    status: "active",
  },
  {
    title: "Full-Stack Web Development",
    organization: "Coursera",
    dateObtained: "May 2024",
    description: "Learned full-stack development using MERN stack with deployment practices.",
    verificationLink: "https://www.coursera.org/certificate/fullstack",
    skills: ["Node.js", "Express", "MongoDB", "React", "Tailwind CSS"],
    status: "active",
  },
  {
    title: "Python for Data Science",
    organization: "edX",
    dateObtained: "March 2023",
    description: "Gained expertise in Python programming and data analysis libraries.",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib"],
    status: "expired",
  },
];

const CertificationContainer = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-10 px-4 min-h-screen">
      <div className="container mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-8">
          Certifications
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationContainer;

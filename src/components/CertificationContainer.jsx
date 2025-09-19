import React from "react";
import { CertificationCard } from "./CertificationCard"; // make sure the path is correct

const certifications = [
  {
    title: "Complete Web Development",
    organization: "Programming Hero",
    dateObtained: "Aug 2025",
    certificateCode: "WEB11-2386",
    description:
      "Completed a comprehensive React course covering Hooks, Redux, and project-based learning.",
    verificationLink:
      "https://drive.google.com/file/d/1kj7-nj6r6hIUEjRTmER5MqagGYX8Pm5Y/view",
    skills: ["React", "Html", "JavaScript", "Css"],
    status: "active",
  },
  {
    title: "Object-Oriented Programming in Java",
    organization: "Simplilearn",
    dateObtained: "3rd September 2025",
    certificateCode: "8907132",
    description:
      "Learned object-oriented programming concepts in JavaScript including classes, objects, inheritance, encapsulation, and polymorphism.",
    verificationLink:
      "https://certificates.simplicdn.net/share/8907132_92932831756899054058.pdf",
    skills: [
      "Java",
      "OOP",
      "Classes",
      "Objects",
      "Inheritance",
      "Encapsulation",
      "Polymorphism",
    ],
    status: "active",
  },
];

const CertificationContainer = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-10 px-4 min-h-screen">
      <div className="container mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-black dark:text-white text-center mb-20">
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

import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaHtml5, FaCss3Alt, FaGit, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiExpress, SiMongodb, SiFirebase } from "react-icons/si";

const technologies = [
  { name: "React", icon: FaReact, color: "#61DBFB" }, // light blue
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Git", icon: FaGit, color: "#F05032" },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#38B2AC" },
];


// Example React component to render this:

export default function TechList() {
  return (
    <div className="flex flex-wrap gap-6">
      {technologies.map(({ name, icon: Icon }) => (
        <div key={name} className="flex flex-col items-center w-24">
          <Icon size={48} className="" />
          <p className="mt-2 text-center font-semibold">{name}</p>
        </div>
      ))}
    </div>
  );
}

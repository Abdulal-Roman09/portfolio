import { projects } from "@/app/data/projects";

export default function ProjectDetails({ params,projects }) {
    console.log(projects)
  const { id } = params;
  console.log(id);

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="p-10 text-red-500">Project not found!</div>;
  }

  return <div>{project.title}</div>;
}

import { projects } from "@/app/data/projects";

export default function ProjectDetails({ params }) {
  const { id } = params;
  const projectId = Array.isArray(id) ? id[0] : id;

  console.log("projectId:", projectId);

  const project = projects.find(p => p.id === projectId);
  console.log("found project:", project);

  if (!project) {
    return <div className="p-10 text-red-500">প্রজেক্ট পাওয়া যায়নি!</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
    </div>
  );
}

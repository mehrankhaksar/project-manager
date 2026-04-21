import type { IProject } from "../App";
import Button from "./Button";

export default function ProjectSidebar({
  onStartCreateNewProject,
  projects,
}: {
  onStartCreateNewProject: () => void;
  projects: IProject[];
}) {
  return (
    <aside className="bg-stone-900 text-stone-50 px-8 py-16 w-1/3 md:w-72 rounded-r-xl my-8 flex flex-col">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <Button onClick={onStartCreateNewProject} variant="secondary">
        + Add Project
      </Button>
      <ul className="border-t border-stone-600 mt-4 pt-2 overflow-y-auto">
        {projects.map((project) => (
          <li key={project.id}>
            <Button className="w-full text-left truncate">
              {project.title}
            </Button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

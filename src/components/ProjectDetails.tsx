import { useProject } from "../contexts/ProjectProvider";
import type { IProject } from "../types/project";
import Button from "./Button";

export default function ProjectDetails({
  title,
  description,
  dueDate,
}: IProject) {
  const { onDeleteProject } = useProject();

  const formattedDueDate = new Date(dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-140 mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600">{title}</h1>
          <Button variant="danger" onClick={onDeleteProject}>
            Delete
          </Button>
        </div>
        <span className="mb-4 text-stone-400">{formattedDueDate}</span>
        <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
      </header>
      Tasks
    </div>
  );
}

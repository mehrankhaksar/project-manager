import { useProject } from "../contexts/ProjectProvider";
import Button from "./Button";
import NewProjectTask from "./NewProjectTask";

export default function ProjectTasks() {
  const {
    projectData: { tasks, selectedProjectId },
    onRemoveProjectTask,
  } = useProject();

  const selectedProjectTasks = tasks.filter(
    (task) => task.projectId === selectedProjectId,
  );

  return (
    <div>
      <h1 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h1>
      <NewProjectTask />
      <div className="mt-4">
        {selectedProjectTasks.length > 0 ? (
          <ul className="bg-stone-200 p-4 rounded-xl space-y-4">
            {selectedProjectTasks.map((selectedProjectTask) => (
              <li
                key={selectedProjectTask.id}
                className="flex gap-2 items-center"
              >
                <p className="flex-1 truncate">{selectedProjectTask.name}</p>
                <Button
                  className="text-red-500! hover:text-red-800!"
                  variant="ghost"
                  onClick={() => onRemoveProjectTask(selectedProjectTask.id)}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <p>This project does not have any tasks yet.</p>
        )}
      </div>
    </div>
  );
}

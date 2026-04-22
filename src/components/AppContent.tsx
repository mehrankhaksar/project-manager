import { useProject } from "../contexts/ProjectProvider";
import Dashboard from "./Dashboard";
import NewProject from "./NewProject";
import ProjectDetails from "./ProjectDetails";

export default function AppContent() {
  const { projectData } = useProject();

  let content;

  switch (projectData.selectedProjectId) {
    case null:
      content = <NewProject />;
      break;

    case undefined:
      content = <Dashboard />;
      break;

    default:
      const selectedProject = projectData.projects.find(
        (project) => project.id === projectData.selectedProjectId,
      );

      content = selectedProject ? (
        <ProjectDetails {...selectedProject} />
      ) : (
        <Dashboard />
      );

      break;
  }

  return content;
}

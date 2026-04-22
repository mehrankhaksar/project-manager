import Dashboard from "./components/Dashboard";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import ProjectDetails from "./components/ProjectDetails";
import ProjectProvider, { useProject } from "./contexts/ProjectProvider";

export default function App() {
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
      if (selectedProject) content = <ProjectDetails {...selectedProject} />;
      else content = <Dashboard />;
      break;
  }

  return (
    <ProjectProvider>
      <main className="h-screen flex gap-8 overflow-hidden">
        <ProjectSidebar />
        {content}
      </main>
    </ProjectProvider>
  );
}

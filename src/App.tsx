import { useState } from "react";
import Dashboard from "./components/Dashboard";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";

type ProjectDataType = {
  selectedProjectId: number | null | undefined;
  projects: [];
};

export default function App() {
  const [projectData, setProjectData] = useState<ProjectDataType>({
    selectedProjectId: undefined,
    projects: [],
  });

  const onStartCreateNewProject = () => {
    setProjectData((prev) => ({ ...prev, selectedProjectId: null }));
  };

  let content;

  switch (projectData.selectedProjectId) {
    case null:
      content = <NewProject />;
      break;

    case undefined:
      content = <Dashboard onStartCreateNewProject={onStartCreateNewProject} />;
      break;

    default:
      content = <Dashboard onStartCreateNewProject={onStartCreateNewProject} />;
      break;
  }

  return (
    <main className="h-screen flex gap-8">
      <ProjectSidebar onStartCreateNewProject={onStartCreateNewProject} />
      {content}
    </main>
  );
}

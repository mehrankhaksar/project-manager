import { useState } from "react";
import Dashboard from "./components/Dashboard";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";

type ProjectDataType = {
  selectedProjectId: number | null | undefined;
  projects: IProject[];
};

export interface IProject {
  title: string;
  description: string;
  dueDate: string;
}

export default function App() {
  const [projectData, setProjectData] = useState<ProjectDataType>({
    selectedProjectId: undefined,
    projects: [],
  });

  const onStartCreateNewProject = () => {
    setProjectData((prev) => ({ ...prev, selectedProjectId: null }));
  };

  const onCreateNewProject = (newProject: IProject) => {
    setProjectData((prev) => ({
      ...prev,
      projects: [...prev.projects, newProject],
    }));
  };

  let content;

  switch (projectData.selectedProjectId) {
    case null:
      content = <NewProject onCreateNewProject={onCreateNewProject} />;
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

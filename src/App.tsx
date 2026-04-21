import { useState } from "react";
import Dashboard from "./components/Dashboard";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";

type ProjectDataType = {
  selectedProjectId: number | null | undefined;
  projects: IProject[];
};

export interface IProject {
  id: number;
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

  const onCancelCreateNewProject = () => {
    setProjectData((prev) => ({ ...prev, selectedProjectId: undefined }));
  };

  const onCreateNewProject = (newProject: IProject) => {
    setProjectData((prev) => ({
      selectedProjectId: undefined,
      projects: [...prev.projects, newProject],
    }));
  };

  let content;

  switch (projectData.selectedProjectId) {
    case null:
      content = (
        <NewProject
          onCreateNewProject={onCreateNewProject}
          onCancel={onCancelCreateNewProject}
        />
      );
      break;

    case undefined:
      content = <Dashboard onStartCreateNewProject={onStartCreateNewProject} />;
      break;

    default:
      content = <Dashboard onStartCreateNewProject={onStartCreateNewProject} />;
      break;
  }

  return (
    <main className="h-screen flex gap-8 overflow-hidden">
      <ProjectSidebar
        onStartCreateNewProject={onStartCreateNewProject}
        projects={projectData.projects}
      />
      {content}
    </main>
  );
}

import React from "react";
import type { IProject } from "../types/project";

type ProjectDataType = {
  selectedProjectId: number | null | undefined;
  projects: IProject[];
};

type ProjectContextType = {
  projectData: ProjectDataType;
  onStartCreateNewProject: () => void;
  onCancelCreateNewProject: () => void;
  onCreateNewProject: (newProject: IProject) => void;
  onSelectProject: (id: number) => void;
  onDeleteProject: () => void;
};

const ProjectContext = React.createContext<ProjectContextType | null>(null);

export default function ProjectProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [projectData, setProjectData] = React.useState<ProjectDataType>({
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

  const onSelectProject = (id: number) => {
    setProjectData((prev) => ({
      ...prev,
      selectedProjectId: id,
    }));
  };

  const onDeleteProject = () => {
    setProjectData((prev) => ({
      selectedProjectId: undefined,
      projects: prev.projects.filter(
        (prevProject) => prevProject.id !== prev.selectedProjectId,
      ),
    }));
  };

  const ctxValue = {
    projectData,
    onStartCreateNewProject,
    onCancelCreateNewProject,
    onCreateNewProject,
    onSelectProject,
    onDeleteProject,
  };

  return (
    <ProjectContext.Provider value={ctxValue}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = React.useContext(ProjectContext);

  if (!context) {
    throw new Error("useProject must be used within ProjectProvider");
  }

  return context;
}

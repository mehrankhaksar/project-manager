import React from "react";
import type { IProject } from "../types/project";
import type { ITask } from "../types/task";

type ProjectDataType = {
  selectedProjectId: number | null | undefined;
  projects: IProject[];
  tasks: ITask[];
};

type ProjectContextType = {
  projectData: ProjectDataType;
  onStartCreateNewProject: () => void;
  onCancelCreateNewProject: () => void;
  onCreateNewProject: (newProject: IProject) => void;
  onSelectProject: (id: number) => void;
  onDeleteProject: () => void;
  onAddNewProjectTask: (newTask: ITask) => void;
  onRemoveProjectTask: (id: number) => void;
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
    tasks: [],
  });

  const onStartCreateNewProject = () => {
    setProjectData((prev) => ({ ...prev, selectedProjectId: null }));
  };

  const onCancelCreateNewProject = () => {
    setProjectData((prev) => ({ ...prev, selectedProjectId: undefined }));
  };

  const onCreateNewProject = (newProject: IProject) => {
    setProjectData((prev) => ({
      ...prev,
      selectedProjectId: undefined,
      projects: [...prev.projects, newProject],
    }));
  };

  const onAddNewProjectTask = (newTask: ITask) => {
    setProjectData((prev) => ({
      ...prev,
      tasks: [...prev.tasks, newTask],
    }));
  };

  const onRemoveProjectTask = (id: number) => {
    setProjectData((prev) => ({
      ...prev,
      tasks: prev.tasks.filter((task) => task.id !== id),
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
      ...prev,
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
    onAddNewProjectTask,
    onRemoveProjectTask,
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

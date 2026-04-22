import React from "react";
import type { IProject } from "../types/project";
import type { ITask } from "../types/task";

type ProjectDataType = {
  selectedProjectId: number | null | undefined;
  projects: IProject[];
  tasks: ITask[];
};

type ProjectDataActionType =
  | {
      type: "CREATE_NEW_PROJECT";
      payload: { newProject: IProject };
    }
  | {
      type: "DELETE_PROJECT";
    }
  | {
      type: "ADD_NEW_PROJECT_TASK";
      payload: { newTask: ITask };
    }
  | {
      type: "REMOVE_PROJECT_TASK";
      payload: { id: number };
    }
  | {
      type: "SELECT_PROJECT";
      payload: { id: number };
    }
  | {
      type: "START_CREATE_NEW_PROJECT";
    }
  | {
      type: "CANCEL_CREATE_NEW_PROJECT";
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

const projectDataReducer = (
  state: ProjectDataType,
  action: ProjectDataActionType,
) => {
  switch (action.type) {
    case "START_CREATE_NEW_PROJECT":
      return { ...state, selectedProjectId: null };
    case "CANCEL_CREATE_NEW_PROJECT":
      return { ...state, selectedProjectId: undefined };
    case "CREATE_NEW_PROJECT":
      return {
        ...state,
        selectedProjectId: undefined,
        projects: [...state.projects, action.payload.newProject],
      };
    case "DELETE_PROJECT":
      return {
        ...state,
        selectedProjectId: undefined,
        projects: state.projects.filter(
          (project) => project.id !== state.selectedProjectId,
        ),
        tasks: state.tasks.filter(
          (task) => task.projectId !== state.selectedProjectId,
        ),
      };
    case "SELECT_PROJECT":
      return {
        ...state,
        selectedProjectId: action.payload.id,
      };
    case "ADD_NEW_PROJECT_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload.newTask],
      };
    case "REMOVE_PROJECT_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default function ProjectProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [projectData, dispatch] = React.useReducer(projectDataReducer, {
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const onStartCreateNewProject = () => {
    dispatch({ type: "START_CREATE_NEW_PROJECT" });
  };

  const onCancelCreateNewProject = () => {
    dispatch({ type: "CANCEL_CREATE_NEW_PROJECT" });
  };

  const onCreateNewProject = (newProject: IProject) => {
    dispatch({ type: "CREATE_NEW_PROJECT", payload: { newProject } });
  };

  const onDeleteProject = () => {
    dispatch({ type: "DELETE_PROJECT" });
  };

  const onSelectProject = (id: number) => {
    dispatch({ type: "SELECT_PROJECT", payload: { id } });
  };

  const onAddNewProjectTask = (newTask: ITask) => {
    dispatch({ type: "ADD_NEW_PROJECT_TASK", payload: { newTask } });
  };

  const onRemoveProjectTask = (id: number) => {
    dispatch({ type: "REMOVE_PROJECT_TASK", payload: { id } });
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

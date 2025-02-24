import Aside from "./components/Aside.jsx";
import ProjectSection from "./components/ProjectSection.jsx";

import { useState, useRef } from "react";

function App() {
  const inputTask = useRef();
  const [projectState, setProjectState] = useState({
    project: [],
    projectTasks: undefined,
  });

  function handleSetProjectTasks(value) {
    setProjectState((preState) => {
      return {
        ...preState,
        projectTasks: value,
      };
    });
  }

  function handleCreateProject(title, description, date) {
    setProjectState((preState) => {
      return {
        ...preState,
        project: [...preState.project, { title, description, date, tasks: [] }],
      };
    });
  }

  function handleEditProject(title) {
    setProjectState((preState) => {
      return {
        ...preState,
        projectTasks: title,
      };
    });
  }
  function handleDeleteProject() {
    const projectRemain = projectState.project.filter((project) => {
      return project.title !== projectState.projectTasks;
    });
    setProjectState({ project: projectRemain, projectTasks: undefined });
  }

  function handleAddTask() {
    if (inputTask.current.value.trim() === "") {
      return;
    }
    const projectUpdate = projectState.project.map((project) => {
      if (project.title === projectState.projectTasks) {
        return {
          ...project,
          tasks: [inputTask.current.value, ...project.tasks],
        };
      } else {
        return project;
      }
    });
    inputTask.current.value = "";
    setProjectState((preState) => {
      return {
        ...preState,
        project: projectUpdate,
      };
    });
  }

  function handleDeleteTask(taskText) {
    const projectUpdate = projectState.project.map((project) => {
      if (project.title === projectState.projectTasks) {
        const tasksUpdating = project.tasks.filter((task) => {
          return task !== taskText;
        });
        return {
          ...project,
          tasks: tasksUpdating,
        };
      } else {
        return project;
      }
    });
    setProjectState((preState) => {
      return {
        ...preState,
        project: projectUpdate,
      };
    });
  }

  return (
    <main className="flex">
      <Aside
        onSetProjectTasks={handleSetProjectTasks}
        projectState={projectState}
        onEditProject={handleEditProject}
      />
      <ProjectSection
        inputTask={inputTask}
        projectState={projectState}
        onSetProjectTasks={handleSetProjectTasks}
        onCreateProject={handleCreateProject}
        onEditProject={handleEditProject}
        onAddTasks={handleAddTask}
        onDeleteProject={handleDeleteProject}
        onDeleteTask={handleDeleteTask}
      />
    </main>
  );
}

export default App;

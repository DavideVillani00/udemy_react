import Aside from "./components/Aside.jsx";
import ProjectSection from "./components/ProjectSection.jsx";

import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    project: [],
    projectTasks: undefined,
  });
  const [projectSelected, setProjectSelected] = useState();

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
        project: [{ title, description, date }],
      };
    });
    console.log(projectState);
  }

  function handleEditProject(project) {
    setProjectSelected(project.title);
    console.log(projectSelected);
  }

  return (
    <main className="flex">
      <Aside
        onSetProjectTasks={handleSetProjectTasks}
        projectState={projectState}
        onEditProject={handleEditProject}
      />
      <ProjectSection
        projectState={projectState}
        projectSelected={projectSelected}
        onSetProjectTasks={handleSetProjectTasks}
        onCreateProject={handleCreateProject}
      />
    </main>
  );
}

export default App;

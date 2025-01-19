import Aside from "./components/Aside.jsx";
import ProjectSection from "./components/ProjectSection.jsx";

import { useState } from "react";

function App() {
  const [creatingProject, setCreatingProject] = useState(false);
  const [projects, setProjects] = useState([]);

  function handleSetCreating(bool) {
    if (bool === true && creatingProject === false) {
      setCreatingProject(true);
    } else if (bool === false && creatingProject === true) {
      setCreatingProject(true);
    }
  }

  function handleCreateProject(title, description, date) {
    setProjects((preProj) => [...preProj, { title, description, date }]);
    console.log(projects);
  }

  return (
    <main className="flex">
      <Aside onChangeCreating={handleSetCreating} projects={projects} />
      <ProjectSection
        creatingProject={creatingProject}
        onChangeCreating={handleSetCreating}
      />
    </main>
  );
}

export default App;

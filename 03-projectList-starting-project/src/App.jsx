import Aside from "./components/Aside.jsx";
import ProjectSection from "./components/ProjectSection.jsx";

import { useState } from "react";

function App() {
  const [creatingProject, setCreatingProject] = useState(false);
  const [editingProject, setEditingProject] = useState(false);
  const [projects, setProjects] = useState([]);

  function handleSetCreating(bool) {
    if (bool === true && creatingProject === false) {
      setCreatingProject(true);
      setEditingProject(false);
    } else if (bool === false && creatingProject === true) {
      setCreatingProject(false);
      setEditingProject(false);
    }
  }

  function handleSetEditing(bool) {
    if (bool === true && editingProject === false) {
      setCreatingProject(false);
      setEditingProject(true);
    } else if (bool === false && editingProject === true) {
      setCreatingProject(false);
      setEditingProject(false);
    }
  }

  function handleCreateProject(title, description, date) {
    setProjects((preProj) => [...preProj, { title, description, date }]);
    console.log(projects);
  }

  return (
    <main className="flex">
      <Aside
        onChangeCreating={handleSetCreating}
        projects={projects}
        onEditProject={onEditProject}
      />
      <ProjectSection
        creatingProject={creatingProject}
        onChangeCreating={(bool) => handleSetCreating(bool)}
        onCreateProject={(title, description, date) =>
          handleCreateProject(title, description, date)
        }
      />
    </main>
  );
}

export default App;

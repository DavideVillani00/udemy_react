import logo from "../assets/no-projects.png";
import NewProject from "./NewProject.jsx";

export default function ProjectSection({
  creatingProject,
  onChangeCreating,
  onCreateProject,
}) {
  return (
    <div className="flex w-8/12 justify-center p-10">
      {creatingProject ? (
        <NewProject
          onChangeCreating={onChangeCreating}
          onCreateProject={onCreateProject}
        />
      ) : (
        <div className="container justify-center items-center gap-5 ">
          <img
            src={logo}
            alt="immagine taccuino con penna"
            className="h-14 w-14"
          />
          <h1 className="h1">No project selected</h1>
          <p>select a project or get started witch a new one</p>
          <button
            onClick={() => {
              onChangeCreating(true);
            }}
          >
            Create a new project
          </button>
        </div>
      )}
    </div>
  );
}

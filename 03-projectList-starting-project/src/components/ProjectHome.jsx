import logo from "../assets/no-projects.png";
export default function ProjectHome({ onSetProjectTasks }) {
  return (
    <div className="container justify-center items-center gap-5 ">
      <img src={logo} alt="immagine taccuino con penna" className="h-14 w-14" />
      <h1 className="h1">No project selected</h1>
      <p>select a project or get started witch a new one</p>
      <button onClick={() => onSetProjectTasks("creating")}>
        Create a new project
      </button>
    </div>
  );
}

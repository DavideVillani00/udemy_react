export default function Aside({
  onSetProjectTasks,
  projectState,
  onEditProject,
}) {
  return (
    <aside className="container  items-start gap-10 bg-black px-12 py-20 h-screen w-4/12 rounded-r-3xl">
      <h1 className="h1 text-white">Your project</h1>
      <button className="btn" onClick={() => onSetProjectTasks("creating")}>
        + Add project
      </button>
      <ol className="text-slate-50">
        {projectState.project.length > 0 ? (
          projectState.project.map((project) => (
            <li key={project.title}>
              <button
                onClick={() => {
                  onSetProjectTasks("editing");
                  onEditProject(project);
                }}
              >
                {project.title}{" "}
                <span className="text-neutral-500">{project.date}</span>
              </button>
            </li>
          ))
        ) : (
          <li>nessun progetto inserito</li>
        )}
      </ol>
    </aside>
  );
}

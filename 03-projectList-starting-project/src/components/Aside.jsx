export default function Aside({ onChangeCreating, projects }) {
  return (
    <aside className="container  items-start gap-10 bg-black px-12 py-20 h-screen w-4/12 rounded-r-3xl">
      <h1 className="h1 text-white">Your project</h1>
      <button
        className="btn"
        onClick={() => {
          onChangeCreating(true);
        }}
      >
        + Add project
      </button>
      <ol className="text-slate-50">
        {projects.length > 0 ? (
          projects.map((project) => (
            <li
              key={project.title}
              onClick={() => {
                onEditProject(project);
              }}
            >
              {project.title}{" "}
              <span className="text-neutral-500">{project.date}</span>
            </li>
          ))
        ) : (
          <li>nessun progetto inserito</li>
        )}
      </ol>
    </aside>
  );
}

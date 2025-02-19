// !! DA SISTEMARE IL PROJECT INFO
export default function ProjectInfo({ projectSelected, projectState }) {
  projectState.project.forEach((project) => {
    if (project.title === projectSelected) {
      console.log(project);
    }
  });

  return (
    <div className="container justify-center items-stretch w-9/12">
      {projectState.project.map((project) => {
        project.title == projectSelected ? (
          <>
            <div id="projectInfo" className="flex">
              <div className="container items-start gap-4">
                <h1>{project.title}</h1>
                <p className="text-slate-500">{project.date}</p>
                <p>{project.description}</p>
              </div>
              <button className="bg-transparent border-0 h-10">delete</button>
            </div>
            <hr className="m-5" />
            <div id="projectTasks">
              <h2 className="text-3xl">Tasks</h2>
              <input
                type="text"
                placeholder="Write new task"
                className="w-96"
              />
              <button className="bg-transparent border-0 ml-2">Add task</button>
              <ol className="bg-stone-100 p-5 mt-5 rounded-lg">
                <li>task</li>
              </ol>
            </div>
          </>
        ) : (
          <h1>OOPS qualcosa è andato storto</h1>
        );
      })}
    </div>
  );
}

export default function ProjectInfo({
  onAddTasks,
  projectState,
  onDeleteProject,
  inputTask,
  onDeleteTask,
}) {
  const projectInfo = projectState.project.filter((project) => {
    return project.title === projectState.projectTasks;
  });
  const { title, description, date, tasks } = projectInfo[0];

  return (
    <div className="container justify-center items-stretch w-9/12">
      {projectInfo ? (
        <>
          <div id="projectInfo" className="flex">
            <div className="container items-start gap-4">
              <h1>{title}</h1>
              <p className="text-slate-500">{date}</p>
              <p>{description}</p>
            </div>
            <button
              className="bg-transparent border-0 h-10"
              onClick={onDeleteProject}
            >
              delete
            </button>
          </div>
          <hr className="m-5" />
          <div id="projectTasks">
            <h2 className="text-3xl">Tasks</h2>
            <input
              type="text"
              placeholder="Write new task"
              className="w-96"
              ref={inputTask}
            />
            <button
              className="bg-transparent border-0 ml-2"
              onClick={onAddTasks}
            >
              Add task
            </button>
            <ol className="bg-stone-100 p-5 mt-5 rounded-lg">
              {console.log("project:", tasks)}
              {tasks.length > 0 ? (
                tasks.map((task, index) => {
                  return (
                    <li key={index} className="my-2">
                      {/* da fare l'eliminazione della task */}
                      <button onClick={() => onDeleteTask()} className="mx-2">
                        X
                      </button>
                      {task}
                    </li>
                  );
                })
              ) : (
                <li>nessuna task inserita</li>
              )}
            </ol>
          </div>
        </>
      ) : (
        <h1>OOPS qualcosa è andato storto</h1>
      )}
    </div>
  );
}

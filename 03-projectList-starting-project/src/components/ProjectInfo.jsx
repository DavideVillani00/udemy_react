import Tasks from "./Tasks.jsx";

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
          <Tasks
            onAddTasks={onAddTasks}
            inputTask={inputTask}
            onDeleteTask={onDeleteTask}
            tasks={tasks}
          />
        </>
      ) : (
        <h1>OOPS qualcosa è andato storto</h1>
      )}
    </div>
  );
}

import NewProject from "./NewProject.jsx";
import ProjectHome from "./ProjectHome.jsx";
import ProjectInfo from "./ProjectInfo.jsx";

export default function ProjectSection({
  projectState,
  onSetProjectTasks,
  onCreateProject,
  onAddTasks,
  onDeleteProject,
  inputTask,
  onDeleteTask,
}) {
  let mainTasks;
  switch (projectState.projectTasks) {
    case "creating":
      mainTasks = (
        <NewProject
          onSetProjectTasks={onSetProjectTasks}
          onCreateProject={onCreateProject}
        />
      );
      break;
    case undefined:
      mainTasks = <ProjectHome onSetProjectTasks={onSetProjectTasks} />;
      break;

    default:
      mainTasks = (
        <ProjectInfo
          inputTask={inputTask}
          projectState={projectState}
          onAddTasks={onAddTasks}
          onDeleteProject={onDeleteProject}
          onDeleteTask={onDeleteTask}
        />
      );
      break;
  }
  return <div className="flex w-8/12 justify-center p-10">{mainTasks}</div>;
}

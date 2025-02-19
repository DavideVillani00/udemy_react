import NewProject from "./NewProject.jsx";
import ProjectHome from "./ProjectHome.jsx";
import ProjectInfo from "./ProjectInfo.jsx";

export default function ProjectSection({
  projectState,
  projectSelected,
  onSetProjectTasks,
  onCreateProject,
}) {
  console.log(projectSelected);
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
    case "editing":
      mainTasks = (
        <ProjectInfo
          projectSelected={projectSelected}
          projectState={projectState}
        />
      );
      break;

    default:
      mainTasks = <ProjectHome onSetProjectTasks={onSetProjectTasks} />;
      break;
  }
  return <div className="flex w-8/12 justify-center p-10">{mainTasks}</div>;
}

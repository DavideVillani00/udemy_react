export default function ProjectInfo() {
  return (
    <>
      <div id="projectInfo">
        <div>
          <h1>{title}</h1>
          <p>{date}</p>
          <p>{description}</p>
        </div>
        <button>delete</button>
      </div>
      <hr />
      <div id="projectTasks">
        <h2>Tasks</h2>
        <input type="text" placeholder="Write new task" />
        <button>Add task</button>
        <ol>
          <li>task</li>
        </ol>
      </div>
    </>
  );
}

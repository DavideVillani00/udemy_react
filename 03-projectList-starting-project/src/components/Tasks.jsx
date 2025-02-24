export default function Tasks({ tasks, onAddTasks, inputTask, onDeleteTask }) {
  return (
    <div id="projectTasks">
      <h2 className="text-3xl">Tasks</h2>
      <input
        type="text"
        placeholder="Write new task"
        className="w-96"
        ref={inputTask}
      />
      <button className="bg-transparent border-0 ml-2" onClick={onAddTasks}>
        Add task
      </button>
      <ol className="bg-stone-100 p-5 mt-5 rounded-lg">
        {tasks.length > 0 ? (
          tasks.map((task, index) => {
            return (
              <li key={index} className="my-2">
                {/* da fare l'eliminazione della task */}
                <button onClick={() => onDeleteTask(task)} className="mx-2">
                  X
                </button>
                <span>{task}</span>
              </li>
            );
          })
        ) : (
          <li>nessuna task inserita</li>
        )}
      </ol>
    </div>
  );
}

export default function NewProject({ onChangeCreating }) {
  return (
    <form className="container justify-center gap-5">
      <div className=" flex justify-end gap-2">
        <button
          onClick={() => {
            onChangeCreating(false);
          }}
          className="bg-transparent text-slate-950"
        >
          Cancel
        </button>
        <button className="text-white">Save</button>
      </div>
      <div className="inputSection">
        <label htmlFor="title">title</label>
        <input
          type="text"
          id="title"
          placeholder="Write project title"
          className="input"
        />
      </div>
      <div className="inputSection">
        <label htmlFor="description">description</label>
        <textarea
          id="description"
          placeholder="Write project description"
          className="input"
        ></textarea>
      </div>
      <div className="inputSection">
        <label htmlFor="date">due date</label>
        <input type="date" id="date" className="input" />
      </div>
    </form>
  );
}

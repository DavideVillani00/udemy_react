import { useRef } from "react";

export default function NewProject({ onSetProjectTasks, onCreateProject }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleValidation() {
    let sanTitle = title.current.value;
    let sanDescription = description.current.value;
    let sanDate = date.current.value;
    if (!sanTitle || sanTitle.trim() === "") {
      console.log("inserisci un titolo valido");
      return;
    }
    if (!sanDescription || sanDescription.trim() === "") {
      console.log("inserisci una descrizione valida");
      return;
    }
    if (!sanDate) {
      console.log("inserisci una data di scadenza");
      return;
    }
    sanTitle = sanTitle.trim();
    sanDescription = sanDescription.trim();
    console.log(sanTitle, sanDescription, sanDate);

    onCreateProject(sanTitle, sanDescription, sanDate);
    onSetProjectTasks(undefined);
  }

  return (
    <div className="container justify-center gap-5">
      <div className=" flex justify-end gap-2">
        <button
          onClick={() => {
            onChangeCreating(undefined);
          }}
          className="bg-transparent text-slate-950"
        >
          Cancel
        </button>
        <button className="text-white" onClick={handleValidation}>
          Save
        </button>
      </div>
      <div className="inputSection">
        <label htmlFor="title">title</label>
        <input
          type="text"
          id="title"
          placeholder="Write project title"
          className="input"
          ref={title}
        />
      </div>
      <div className="inputSection">
        <label htmlFor="description">description</label>
        <textarea
          id="description"
          placeholder="Write project description"
          className="input"
          ref={description}
        ></textarea>
      </div>
      <div className="inputSection">
        <label htmlFor="date">due date</label>
        <input type="date" id="date" className="input" ref={date} />
      </div>
    </div>
  );
}

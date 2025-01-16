import { useRef, useState} from "react";
export default function Player() {
  const inputName = useRef()
const [name, setName] = useState("unknown entity")

  function handleChangeName(){
    if(inputName.current.value!==""){

      setName(inputName.current.value);
      inputName.current.value = ""
    }
 
  }

  return (
    <section id="player">
      <h2>Welcome {name??"unknown entity"}</h2>
      <p>
        <input type="text" ref={inputName} />
        <button onClick={handleChangeName} >Set Name</button>
      </p>
    </section>
  );
}

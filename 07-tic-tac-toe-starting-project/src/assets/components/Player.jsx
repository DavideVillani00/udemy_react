import { useState } from "react"
export const Player = ({name, symbol})=>{
    const [isEditing, setIsEditing] = useState(false)
    const [playerName1, setPlayerName1] = useState(name)

    const handleEditing = ()=>{
        setIsEditing(!isEditing)
    }
    return(
      <li>
        <span className="player">
            {isEditing?<input type="text" placeholder="inserisci nome"  required onChange={(e)=>{setPlayerName1(e.target.value)}}/>:<span className="player-name">{playerName1}</span>}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditing}>{isEditing?"change":"edit"}</button>
    </li>  
    )
    
}
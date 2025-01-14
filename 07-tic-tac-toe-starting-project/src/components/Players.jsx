import { useState } from "react"

export default function Players({name, symbol, isActive, onChangeName}){
    const [changing, setChanging] = useState(false)

    function handleChangeName (){
        setChanging(preName=>!preName)
    }


    return (
        <li className={`player ${isActive?"active":null}`}>
            {changing? <input type="text" value={name} onChange={(e)=>onChangeName(symbol, e.target.value)} required/> : <span className="player-name">{name}</span>}
            
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleChangeName}>{changing?"Save":"Edit"}</button>
        </li>
    )
}
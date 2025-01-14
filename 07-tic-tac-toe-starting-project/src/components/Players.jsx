import { useState } from "react"

export default function Players({name, symbol}){
    const [changing, setChanging] = useState(false)
    const [palyerName, setPlayerName] = useState(name)

    function handleChangeName (){
        setChanging(preName=>!preName)
    }

    function handleChangeInputName(e){
        setPlayerName(e.target.value)
    }

    return (
        <li className="player">
            {changing? <input type="text" value={palyerName} onChange={handleChangeInputName} required/> : <span className="player-name">{palyerName}</span>}
            
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleChangeName}>{changing?"Save":"Edit"}</button>
        </li>
    )
}
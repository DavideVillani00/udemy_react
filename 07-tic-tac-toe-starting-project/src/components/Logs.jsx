export default function Logo({turn}){
   return(<ol id="log">
        {turn.map(log=>(
            <li key={`${log.square.col}${log.square.row}`}>
                {`${log.player} selected ${log.square.row}, ${log.square.col}`}
            </li>
        ))}
    </ol>) 
}
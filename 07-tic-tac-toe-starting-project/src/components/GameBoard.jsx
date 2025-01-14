
export default function GameBoard({gameBoard, onSelectedSquare}){

    return (
     <ol id="game-board">
        {gameBoard.map((row, rowIndex)=>(
            <ol key={rowIndex}>{row.map((symbol, colIndex)=>(
                <li key={colIndex}>
                    <button onClick={()=>{if(symbol[0]===null){onSelectedSquare(rowIndex,colIndex)}}}>{symbol}</button>
                </li>))}
            </ol>))}
    </ol>   
    )
    
}
export default function GameOver({player, onReset}){
    return (
        <div id="game-over">
            <h2>GAME OVER</h2>
            <p>{player?`${player} win!`:"it's draw!"}</p>
            <button onClick={onReset}>Restart</button>
        </div>
    )
}
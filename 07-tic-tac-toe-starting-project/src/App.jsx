import Players from "./components/Players.jsx"
import GameBoard from "./components/GameBoard.jsx"
import Logs from "./components/Logs.jsx"
import GameOver from "./components/GameOver.jsx"
import {WINNER_COMBINATION} from "./winner_combination.js"
import { useState } from "react"

// impostazioni predefinite 
const PLAYERS={
  X: "Player 1",
  O: "Player 2"
}
const INITIAL_GAME_BOARD=[
  [[null], [null], [null]],
  [[null], [null], [null]],
  [[null], [null], [null]]
]
// funzione per stabilire player e tabella attuale
function derivateCurrentPlayer(preTurns){
  let currentPlayer = "X";
  if(preTurns.length!==0 && preTurns[0].player==="X"){
    currentPlayer= "O"
  }
  return currentPlayer
}

function deriveGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAME_BOARD].map(innerArray=>[...innerArray])
  for(const turn of gameTurns){
    const {square, player} = turn;
    const {row, col} = square;
    
    gameBoard[row][col] = player
  }
  return gameBoard
}
function deriveWinner(gameBoard, players){
let winner 
for (const combination of WINNER_COMBINATION){
  const firstSymbol = gameBoard[combination[0].row][combination[0].column];
  const secondSymbol = gameBoard[combination[1].row][combination[1].column];
  const thirdSymbol = gameBoard[combination[2].row][combination[2].column]
  if(firstSymbol&& firstSymbol===secondSymbol&&firstSymbol===thirdSymbol){
    winner = players[firstSymbol]
  }
}
return winner

}


function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [players, setPlayers] = useState(PLAYERS)

  const activePlayer = derivateCurrentPlayer(gameTurns)
  const gameBoard = deriveGameBoard(gameTurns)
  const winner = deriveWinner(gameBoard, players)
  const hasDraw= gameTurns.length === 9 && !winner


  function handleSelectedSquare(rowIndex, colIndex){
    setGameTurns(preTurns=>{
      const currentPlayer = derivateCurrentPlayer(preTurns);

      const updateTurns = [
        {square:{row: rowIndex, col: colIndex}, player: currentPlayer}, ...preTurns
      ]
      return updateTurns
    })
  }

function handlePlayerChangeName(symbol, newName){
setPlayers((prePlayers)=>{
  return {...prePlayers, [symbol]: newName}
})
}
function restartGame(){
  setGameTurns([])
}


  return (
    <main>
      <div id="game-container">
      <ol id="players" className="highlight-player">
        <Players name={players.X} symbol="X" isActive={activePlayer==="X"} onChangeName={handlePlayerChangeName}/>
        <Players name={players.O} symbol="O" isActive={activePlayer==="O"}  onChangeName={handlePlayerChangeName}/>
      </ol>
      {(winner||hasDraw)&& <GameOver player={winner?winner:null} onReset={restartGame}/>}
      <div id="game-board">
        <GameBoard gameBoard={gameBoard} onSelectedSquare={handleSelectedSquare}/>
      </div>
      
    </div>
    <Logs turn={gameTurns}/>
    </main>
    
  )
}

export default App

import Players from "./components/Players"

function App() {
  

  return (
    <main>
      <div id="game-container">
      <ol id="players">
        <Players name="Player 1" symbol="X"/>
        <Players name="Player 2" symbol="O"/>
      </ol>
      <div id="game-board">
        <ol>
      GAMEBOARD
      </ol>
      </div>
      
    </div>
    <ol id="log">
      LOG
    </ol>
    </main>
    
  )
}

export default App

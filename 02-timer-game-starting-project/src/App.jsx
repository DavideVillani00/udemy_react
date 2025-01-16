
import GameCard from './components/GameCard.jsx';
import Player from './components/Player.jsx';
import { useRef } from 'react';


function App() {

  
  const dialog = useRef()
  return (
    <>
      <Player />
      <div id="challenges">
        <GameCard seconds={1}>easy</GameCard>
        <GameCard seconds={5}>not easy</GameCard>
        <GameCard seconds={10}>getting tough</GameCard>
        <GameCard seconds={15}>pros only</GameCard>
      </div>
     
    </>
  );
}

export default App;

/** @format */

import React from "react";
import GameBoard from "./components/GameBoard";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const items = [
    // THIS IS WHERE WHAT I THINK OF FOR MY ITEMS SHOULD GO, MAYBE NUMBERS OR IMAGES
    // WHATEVER IS GOING TO BE USED FOR THE MEMEORY GAME THEME
    // THESE ITEMS SHOULD THEN BE GIVEN ID#'S TO BE USED TO IDENTIFY THEM
    // THIS WAY I HAVE A WAY OF TRACKING THE CARDS TO BE DISPLAYED TO THE PLAYER.        

  ];

  return (
    <div className='App'>
      <Scoreboard
        score={score}
        bestScore={bestScore}
      />
      <GameBoard items={items} />
    </div>
  );
}

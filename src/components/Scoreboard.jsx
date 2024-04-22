/** @format */

import React from "react";

function Scoreboard({ score, bestScore }) {
  return (
    <div className='scoreboard'>
      <h1>Score: {score}</h1>
      <h1>Best Score: {bestScore}</h1>
    </div>
  );
}

export default Scoreboard;

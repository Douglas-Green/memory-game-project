/** @format */

import React, { useState, useEffect } from "react";
import Card from "./Card";

function GameBoard({ items }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    shuffleCards();
  }, [items]);

  const shuffleCards = () => {
    const shuffled = [...items].sort(() => 0.5 - Math.random());
    setCards(shuffled);
  };

  const handleCardClick = id => {
    // Add logic to handle click, check for matches, etc.
    shuffleCards();
  };

  return (
    <div className='game-board'>
      {cards.map(card => (
        <Card
          key={card.id}
          item={card}
          onClick={handleCardClick}
        />
      ))}
    </div>
  );
}

export default GameBoard;

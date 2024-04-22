/** @format */

import React from "react";

function Card({ item, onClick }) {
  return (
    <div
      className='card'
      onClick={() => onClick(item.id)}>
      <img
        src={item.image}
        alt={item.text}
      />
      <div>{item.text}</div>
    </div>
  );
}

export default Card;

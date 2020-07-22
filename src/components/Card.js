import React from 'react';

import './card.css';

// Buat props dibawah ini sebagai parameter
const Card = ({ card }) => {
  return (
    <div>
      {
        card.map((element) => (
          <div className="containerCard">
            <h1>{element.location}</h1>
            <p>{element.status}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Card;
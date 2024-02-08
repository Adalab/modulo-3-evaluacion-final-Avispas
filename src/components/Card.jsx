import React from 'react';
import '../scss/layout/Card.scss';

function Card() {
  return (
    <div className='card'>
    <div className='card__boxImg'>
      <div></div>
    </div>
    <div className='card__boxText'>
      <h2>Name</h2>
      <p>Species</p>
      <div>House</div>
    </div>
  </div>
  );
}

export default Card;

import React from 'react';
import PropTypes from 'prop-types';

import '../scss/layout/Card.scss';

function Card({data}) {
  return (
    <div className='card'>
    <div className='card__boxImg'>
      <img src={data.image} alt="" />
    </div>
    <div className='card__boxText'>
      <h2>Name</h2>
      <p>Species</p>
      <div>House</div>
    </div>
  </div>
  );
}
Card.PropTypes = {
  data: PropTypes.object.isRequired,
}
export default Card;

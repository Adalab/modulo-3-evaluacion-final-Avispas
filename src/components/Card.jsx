import React from 'react';
import PropTypes from 'prop-types';
import imgGryffindor from '../images/gryffindor.jpg';
import imgSlytherin from '../images/slytherin.jpg';
import imgHufflepuff from '../images/hufflepuff.jpg';
import imgRavenclaw from '../images/ravenclaw.jpg';


import '../scss/layout/Card.scss';

function Card({data}) {
  let houseImage;
  if (data.house === 'Gryffindor') {
    houseImage = imgGryffindor;
  } else if (data.house === 'Slytherin') {
    houseImage = imgSlytherin;
  } else if (data.house === 'Hufflepuff') {
    houseImage = imgHufflepuff;
  } else if (data.house === 'Ravenclaw') {
    houseImage = imgRavenclaw;
  }
  return (
    <div className='card'>                                   
    <div className='card__boxImg'>
      <img src={data.image} alt="ad" />
    </div>
    <div className='card__boxText'>
      <h2>{data.name}</h2>
      <p>{data.species}</p>
      <div>
        {data.house}
      </div> 
      {houseImage && <img className='imgLogo' src={houseImage} alt={`logo${data.house}`} />}
    </div>
  </div>
  );
}
Card.propTypes = {
  data: PropTypes.object.isRequired,
}
export default Card;

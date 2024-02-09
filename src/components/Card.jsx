import React from 'react';
import PropTypes from 'prop-types';
import CardText from './CardText';



import '../scss/layout/Card.scss';

function Card({filterData}) {

  return (
    <div className='card'>                                   
    <div className='card__boxImg'>
      <img src={filterData.image} alt="ad" />
    </div>
    <CardText filterData={filterData}/>
  </div>
  );
}
Card.propTypes = {
  filterData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
}
export default Card;

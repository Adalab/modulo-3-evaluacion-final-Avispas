import React from 'react';
import PropTypes from 'prop-types';
import CardText from './CardText';
import noPhoto from '../images/logo.jpg';
import '../scss/layout/Card.scss';


function Card({ filterData }) {
  return (
    <>
        <div className="card__boxImg" id={filterData.id}>
          <img className="card__boxImg--img" src={filterData.image || noPhoto} alt="ad" />
        </div>
        <CardText filterData={filterData} />
    </>     
  );
}
Card.propTypes = {
  filterData: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
};
export default Card;

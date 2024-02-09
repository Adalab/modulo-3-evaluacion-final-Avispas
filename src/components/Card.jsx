import React from 'react';
import PropTypes from 'prop-types';
import CardText from './CardText';

import '../scss/layout/Card.scss';
import { Link } from 'react-router-dom';

function Card({ filterData, character, setCharacter }) {
 
  return (
    <div className="card">
      <Link
        to={{ pathname: '/CharacterDetail', state: { character: character } }}
        className="link"
        onClick={(ev) => {
          setCharacter(ev.target.value);
           console.log(ev.target.value);
        }}
        
      >
        <div className="card__boxImg">
          <img className="card__boxImg--img" src={filterData.image} alt="ad" />
        </div>
        <CardText filterData={filterData} />
      </Link>
    </div>
  );
}
Card.propTypes = {
  filterData: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
  character: PropTypes.object.isRequired,
  setCharacter: PropTypes.func.isRequired,
};
export default Card;

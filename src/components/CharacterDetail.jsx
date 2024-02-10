import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import noPhoto from '../images/logo.jpg';
import Gryffindor from '../images/gryffindorDet.jpg';
import Slytherin from '../images/slytherinDet.jpg';
import Hufflepuff from '../images/hufflepuffDet.jpg';
import Ravenclaw from '../images/ravenclawDet.jpg'; 
import '../scss/layout/CharacterDetail.scss';


function CharacterDetail({ data }) {
  const { characterName } = useParams();  
  const foundElem = data.filter((item) => item.id === characterName);
  console.log(foundElem[0]);
  const character = foundElem[0];

  let houseImage;
  if (character.house === 'Gryffindor') {
    houseImage = Gryffindor;
  } else if (character.house === 'Slytherin') {
    houseImage = Slytherin;
  } else if (character.house === 'Hufflepuff') {
    houseImage = Hufflepuff;
  } else if (character.house === 'Ravenclaw') {
    houseImage = Ravenclaw;
  }

  return (
    <main className="main">
      <Link className="linkM" to="/">
        <button className="linkM__btn">Back</button>
      </Link>
      <div className="board">
        <img
          className="board__photo"
          src={character.image || noPhoto}
          alt={character.name}
        />
        <div >
        <img src={houseImage || ''}/>
          <div className="board__text">
          <p>{character.name}</p>
          <p>{character.species}</p>
          <p>{character.patronus}</p>
          <p>{character.ancestry}</p>
          <p>{character.alive}</p>
          <p>{character.house}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

CharacterDetail.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};
export default CharacterDetail;

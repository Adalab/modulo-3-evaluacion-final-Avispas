import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../scss/layout/CharacterDetail.scss';

function CharacterDetail( {character}) {
  console.log(character)
  return (
    <main className="main">
      <Link className="linkM" to="/">
        <button className="linkM__btn">Back</button>
      </Link>
      <div className="board">
        <img className="board__photo" src={character.image} alt="ad" />

        <div className="board__text">
          <p>{character.name}</p>
          <p>{character.species}</p>
          <p>{character.patronus}</p>
          <p>{character.ancestry}</p>
          <p>{character.alive}</p>
          <p>{character.house}</p>
        </div>
      </div>
    </main>
  );
  }

CharacterDetail.propTypes = {
  character: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
};
export default CharacterDetail;

import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

import '../scss/layout/Form.scss';

function Form({ setName, setHouse, name, house, handleReset }) {
  const handleKeyPress = (ev) => {
    if (ev.key === 'Enter' ) {
      ev.preventDefault();
      console.log('Enter presionado');
    }
   };
  return (
    <form className="form">
      <label htmlFor="name" className="form__label">
        Name of the character:
        <input
          onChange={(ev) => {
            setName(ev.target.value);
          }}
          onKeyPress={handleKeyPress}
          value={name}
          type="text"
          id="name"
          name="name"
          className="form__label--input"
          maxLength="35"
        />
      </label>

      <label htmlFor="house" className="form__label">
        Name of the house:
        <select
          onChange={(ev) => {
            setHouse(ev.target.value);
          }}
          value={house}
          className="form__label--input opt"
          name="house"
          id="house"
        >
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
        </select>
      </label>
      <button className='btn' onClick={handleReset}>Reset</button>
    </form>
  );
}
Form.propTypes = {
  setName: PropTypes.func.isRequired,
  setHouse: PropTypes.func.isRequired,
  name: PropTypes.object.isRequired,
  house: PropTypes.object.isRequired,
  handleReset: PropTypes.func.isRequired,
};
export default Form;

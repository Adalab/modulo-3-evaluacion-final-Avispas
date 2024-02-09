import React from 'react';
import PropTypes from 'prop-types';
import '../scss/layout/Form.scss';

function Form({ setName, setHouse }) {
  return (
    <form className="form">
      <label htmlFor="name" className="form__label">
        Name of the character:
        <input
          onChange={(ev) => {
            setName(ev.target.value);
          }}
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
    </form>
  );
}
Form.propTypes = {
  setName: PropTypes.func.isRequired,
  setHouse: PropTypes.func.isRequired,
};
export default Form;

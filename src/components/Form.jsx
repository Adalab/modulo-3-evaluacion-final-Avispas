import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import '../scss/layout/Form.scss';

function Form({handleInput}) {
  const [searchInput, setSearchInput] = useState('');
  const handleChange = (ev) => {
    setSearchInput(ev.target.value);
    handleInput(ev); // Pasar el evento al componente padre
  };
  return (
    <form className='form'>
      <label htmlFor='name' className='form__label'> 
       Name of the character:
       <input 
       value={searchInput}
       onChange={handleChange} 
       type="text" 
       id='name' 
       name='name' 
       className='form__label--input'
       maxLength='35' />
      </label>
      
      <label htmlFor='house' className='form__label'> 
       Name of the house:
       <input onChange={handleInput} type="text" id='house' name='house'className='form__label--input'/>
      </label>   
    </form>

  );
}
Form.propTypes = {
  handleInput: PropTypes.func.isRequired,
}
export default Form;

import React from 'react';
import '../scss/layout/Form.scss'

function Form() {
  return (
    <form className='form'>
      <label htmlFor='name' className='form__label'> 
       Name of the character:
       <input type="text" id='name' name='name' className='form__label--input' />
      </label>
      
      <label htmlFor='house' className='form__label'> 
       Name of the house:
       <input type="text" id='house' name='house'className='form__label--input'/>
      </label>
      
      

    </form>

  );
}

export default Form;

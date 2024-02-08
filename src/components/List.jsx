import React from 'react';
import '../scss/layout/List.scss'

function List() {
  return (
  <div className='card'>
    <div className='card__boxImg'>
      <img src="" alt="" />
    </div>
    <div className='card__boxText'>
      <h2>Name</h2>
      <p>Species</p>
      <div>House</div>
    </div>
  </div>);
}

export default List;

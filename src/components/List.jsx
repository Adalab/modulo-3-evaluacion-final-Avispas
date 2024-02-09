import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import '../scss/layout/List.scss'

function List({data}) {
  return (
    <div className='list'>
      <Card data={data}/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      
    </div>
  
  );
}
List.PropTypes = {
  data: PropTypes.object.isRequired,
}
export default List;

import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import '../scss/layout/List.scss'

function List({data}) {

  // map
  return (
    <div className='list'>
    {data.map((data, index) => (
      <Card key={index} data={data} />
    ))}
  </div>
);
}
List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default List;

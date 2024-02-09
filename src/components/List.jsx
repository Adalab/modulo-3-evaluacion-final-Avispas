import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import '../scss/layout/List.scss'

function List({filterData}) {
  return (
    <div className='list'>
    {filterData.map((data, index) => (
      <Card key={index} filterData={data} />
    ))}
  </div>
);
}
List.propTypes = {
  filterData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
}
export default List;

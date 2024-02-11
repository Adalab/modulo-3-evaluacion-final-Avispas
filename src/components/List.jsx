import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import '../scss/layout/List.scss';

import { Link } from 'react-router-dom';


function List({ filterData }) {
console.log (filterData);

  return (
    <ul className="list">
      {filterData.map((data) => (
        <li className="card" key={data.id}>
        <Link
          to={`/CharacterDetail/${data.id}`}
          className="link"   
          data={data}                    
        >
        <Card
          filterData={data}
          />
           </Link>
    </li>
      ))}
    </ul>
  );
}



List.propTypes = {
  filterData: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
};
export default List;
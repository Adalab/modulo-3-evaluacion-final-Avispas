import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import List from './List';
import '../scss/layout/Main.scss';


function Main({setName, setHouse, filterData}) {
  return (
    <main className="main">
    <Form setName={setName} setHouse={setHouse}/>
    <List filterData={filterData}/>
  </main>
  )
}
Main.propTypes = {
    filterData: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
      .isRequired,
    setName: PropTypes.func.isRequired,
    setHouse: PropTypes.func.isRequired,
   
  };
export default Main
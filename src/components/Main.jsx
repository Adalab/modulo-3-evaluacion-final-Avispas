import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import List from './List';
import '../scss/layout/Main.scss';


function Main({setName, setHouse, filterData, name, house, handleReset}) {
  return (
    <main className="main">
    <Form setName={setName} setHouse={setHouse} name={name} house={house} handleReset={handleReset}/>
    <List filterData={filterData}/>
  </main>
  )
}
Main.propTypes = {
    filterData: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
      .isRequired,
    setName: PropTypes.func.isRequired,
    setHouse: PropTypes.func.isRequired,
    name: PropTypes.object.isRequired,
    house: PropTypes.object.isRequired,
    handleReset: PropTypes.func.isRequired,   
  };
export default Main
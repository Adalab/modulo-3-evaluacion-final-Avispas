import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import List from './List';
import '../scss/layout/Main.scss';


function Main({setName, setHouse, filterData, name, house, handleReset, handleDead, handleAlive, dead, alive}) {
  return (
    <main className="main">
    <Form setName={setName} setHouse={setHouse} name={name} house={house} handleReset={handleReset} handleDead={handleDead} handleAlive={handleAlive} dead={dead} alive={alive}/>
    <List filterData={filterData} name={name}/>
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
    handleDead: PropTypes.func.isRequired,
    handleAlive: PropTypes.func.isRequired,
    dead: PropTypes.func.isRequired,
    alive: PropTypes.func.isRequired,
  };
export default Main
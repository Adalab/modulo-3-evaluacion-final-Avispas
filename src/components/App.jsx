//Components
import React, { useEffect, useState } from 'react';
import callToApi from '../services/Api';
import Header from './Header';
import Form from './Form';
import List from './List';
//Css
import '../scss/App.scss';

//Function APP
function App() {

  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [house, setHouse] = useState('Gryffindor');


  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);
  console.log(data);

  const filterData = data.filter ((character) => {
    if (house === 'All'){
      return true;
    } else {
      return character.house === house
    }
  })
  .filter ((character) => character.name.toLowerCase().includes(name.toLowerCase())) 
  console.log(filterData)

  return (
    <>
      <Header />
      <main className="main">
        <Form setName={setName} setHouse={setHouse}/>
        <List filterData={filterData}/>
      </main>
    </>
  );
}
export default App;

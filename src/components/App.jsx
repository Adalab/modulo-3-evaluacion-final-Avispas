//Components
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import callToApi from '../services/Api';
import Header from './Header';
import Main from './Main';
import CharacterDetail from './CharacterDetail';
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
 // console.log(filterData)

  return (
    <>
      <Header />
     
      <Routes>
        <Route path='/' element={ <Main setName={setName} setHouse={setHouse} filterData={filterData} />}/>
        <Route path='/CharacterDetail/:characterName' element={<CharacterDetail data={data} />}/>
      </Routes>
    </>
  );
}
export default App;

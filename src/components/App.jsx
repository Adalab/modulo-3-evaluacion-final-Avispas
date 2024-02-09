//Components
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
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
  const [hidden, setHidden] = useState('');
  const [character, setCharacter] = useState({
    name: '',
    id: '',
    species: '',
    patronus: '',
    ancestry: '',
    image: '',
    alive: '',
    house: '',
  });
  const location = useLocation();
   console.log(character)
  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);
  console.log(data);

  useEffect(() => {
    setHidden(location.pathname === '/CharacterDetail');
  }, [location.pathname]);

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
      {!hidden && (
        <Main setName={setName} setHouse={setHouse} filterData={filterData} setCharacter={setCharacter} character={character}/>
      )}
      
      <Routes>
        <Route path='/CharacterDetail' element={<CharacterDetail character={character} />}/>
      </Routes>
    </>
  );
}
export default App;

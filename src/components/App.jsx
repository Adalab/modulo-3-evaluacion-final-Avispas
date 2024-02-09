//Components
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Form from './Form';
import List from './List';
//Css
import '../scss/App.scss';
import callToApi from '../services/Api';
//Images

//Function APP
function App() {

  const [data, setData] = useState({
    name: data.name,
    id: data.id,
    species: data.species,
    patronus: data.patronus,
    ancestry: data. ancestry,
    image: data.image,
    alive: data.alive,
   });

   const [searchName, setSearchName] = useState ('');
   useEffect ( () => {
    callToApi().then ( (response) => {
      setData(response);
    })
   }, [searchName]);

   const handleSearch = (ev) => {
    setSearchName(ev.target.value);
   };

   const renderData = () = {
    return data.map ( (data, index) => {
      
    })
   }

  return (
    <>
    <Header />
    <main className='main'>
      <Form/>
      <List data={data}/>
    </main>
  </>
  ); 
}
export default App;

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
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);
  console.log(data);

  const handleInput = (ev) => {
    setSearchName(ev.target.value);
  };

  //  const renderData = () = {
  //   return data.map ( (data, index) => {

  //   })
  //  }

  return (
    <>
      <Header />
      <main className="main">
        <Form handleInput={handleInput} />
        <List data={data} searchName={searchName}/>
      </main>
    </>
  );
}
export default App;

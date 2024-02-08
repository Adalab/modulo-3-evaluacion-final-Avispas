//Components
import React from 'react';
import Header from './Header';
import Form from './Form';
import List from './List';
//Css
import '../scss/App.scss';


//Images
function App() {
  return (
    <>
    <Header />
    <main className='main'>
      <Form/>
      <List/>
    </main>
  </>
  ); 
}
export default App;

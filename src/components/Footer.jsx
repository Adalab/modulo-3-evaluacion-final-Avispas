import React from 'react';
import daliLogo  from '../images/photodali.png'
import '../scss/layout/Footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      
    <img className='daliLogo' src={daliLogo} alt='Logo'/>
    <h3>AVISPAS</h3>  
    
    </footer>
  )
}

export default Footer
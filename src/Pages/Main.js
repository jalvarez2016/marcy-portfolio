import React from 'react'
import '../App.css';
import Banner from '../PageComponents/Banner'
import About from '../PageComponents/About'
import Skills from '../PageComponents/Skills'

function Main() {
  return (
      <div className='main'>
          {/* <h1>Home</h1> */}
          <Banner />
          <About />
          <Skills />
      </div>
  );
}

export default Main;

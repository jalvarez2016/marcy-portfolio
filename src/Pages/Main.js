import React from 'react'
import '../App.css';
import Banner from '../PageComponents/Banner'
import About from '../PageComponents/About'
import Skills from '../PageComponents/Skills'
import Projects from '../PageComponents/ProjectsMini'

function Main() {
  return (
      <div className='main'>
          {/* <h1>Home</h1> */}
          <Banner content={`Welcome`}/>
          <About />
          <Skills />
          <Projects />
      </div>
  );
}

export default Main;

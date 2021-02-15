import React from 'react'
import Banner from '../PageComponents/Banner'
import Intro from '../AboutComponents/Intro'
import '../App.css';

function About() {
  return (
      <div>
        <Banner content={`About`}/>
        <Intro />
      </div>
  );
}

export default About;

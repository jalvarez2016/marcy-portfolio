import React from 'react'
import '../App.css';
// import {Link} from 'react-router-dom';

function About() {
  const aboutStyle = {
    // color: "#773030",
    textAlign: "left",
    padding: "10px",
    paddingLeft: "50px",
    // maxHeight: "300px",
    minHeight: "100px",
    fontSize: "20px",
    backgroundColor: "pink"
  }

  const contentStyle = {
    margin: "0px",
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "16px",
    padding: "5px"
  }
  
  return (
      <div style={aboutStyle} className="main-about">
        <h3 style={contentStyle}>Intro</h3>
        <p style={contentStyle}>
            Well, hello there! Let me tell you a bit about myself:
            <ul>
                <li>
                    I love developing applications that are both intuitive and tackle problems.
                </li>
                <li>
                    When I'm not coding, you'll probably find me sketching or blogging.
                </li>
            </ul>
            You may ask yourself, what could be motivating this guy? To which I respond, 
            I find coding to be incredibly fun, be it designing or solving problems.
            So you can think of it as a sort of perpetual motion machine.
        </p>
      </div>
  );
}

export default About;

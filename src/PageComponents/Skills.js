import React from 'react'
import Skill from './Skill'
import JSIcon from '../Images/JS-Logo.png'
import HTMLICon from '../Images/HTML-Logo.png'
import CSSIcon from '../Images/CSS-Logo.png'
import ReactIcon from '../Images/React.svg'
import ReactRouterIcon from '../Images/ReactRouter.png'
import '../App.css';

function Skills() {
  const skillsStyle = {
    color: "#773030",
    backgroundColor: "pink"
  }

  const contentStyle = {
    margin: "0px",
    fontSize: "16px",
    padding: "5px",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  }
  
  return (
      <div style={skillsStyle} className="skills">
        <h2 style={contentStyle}>My Skills</h2>
        <div style={contentStyle}>
            <Skill ability='Javascript' icon={JSIcon}/>
            <Skill ability='CSS' icon={CSSIcon}/>
            <Skill ability='HTML' icon={HTMLICon}/>
            <Skill ability='React' icon={ReactIcon}/>
            <Skill ability='React-Router' icon={ReactRouterIcon}/>
        </div>
      </div>
  );
}

export default Skills;

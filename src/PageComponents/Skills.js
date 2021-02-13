import React from 'react'
import Skill from './Skill'
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
        <h3 style={contentStyle}>My Skills</h3>
        <p style={contentStyle}>
            <Skill ability='Javascript'/>
            <Skill ability='CSS'/>
            <Skill ability='HTML'/>
            <Skill ability='React' icon={ReactIcon}/>
            <Skill ability='React-Router' icon={ReactRouterIcon}/>
        </p>
      </div>
  );
}

export default Skills;

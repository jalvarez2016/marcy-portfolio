import React from 'react'
import '../App.css';

function Skill(props) {
  const skillStyle = {
      margin: "10px"
  }
  const iconStyle = {
    padding: "8px",
    borderRadius: `50%`,
    backgroundColor: '#4a3e3e',
    height: `100px`,
    width: `100px`,
  }
  const icon = {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background: `url(${props.icon}) no-repeat center`,
    borderRadius: `50%`,
    width: "100%",
    height: "100%",
  }

  return (
      <div style={skillStyle} className="skill">
          <div style={iconStyle}>
              <div style={icon}/>
          </div>
          <h3>{props.ability}</h3>
      </div>
  );
}

export default Skill;

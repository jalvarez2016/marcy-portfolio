import React from 'react'
import '../App.css';

function ProjectCard(props) {
  const cardStyle = {
      margin: "10px"
  }
  const iconStyle = {
      
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
      <div style={cardStyle} className="Project Card">
          <div style={iconStyle}>
              <div style={icon}/>
          </div>
          <h3>{props.title}</h3>
          <p>{props.info}</p>
      </div>
  );
}

export default ProjectCard;

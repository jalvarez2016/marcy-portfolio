import React from 'react'
import '../App.css';

function ProjectCard(props) {
  const cardStyle = {
    minHeight: "550px",
    minWidth: "250px",
    maxWidth: "430px",
    margin: "10px",
    padding: "30px",
    backgroundColor: "rgba(255, 255, 255, .1)",
    borderRadius: "20px",
    backdropFilter: "blur(3px)",
    backgroundClip: "padding-box",
    boxShadow: "10px 10px 10px rgba(44, 41, 38, 0.3)",
    marginTop: "50px",
  }
  const iconStyle = {
    width: "100%",
    height: "200px",
    borderRadius: "20px"
  }
  const icon = {
    height: "100%",
    width: "100%",
  }

  const titleHolder = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  }

  const iconHolder = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }

  const projIcon = {
    height: "50px",
    width: "50px",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
  }

  return (
      <div style={cardStyle} className="Project Card">
          <div style={iconStyle} className="Icon-Holder">
              <img style={icon} src={props.icon} alt="proj"/>
          </div>
          <div className="content">
            <div className="title-container" style={titleHolder}>
              <h3>{props.title}</h3>
              <div className="icon-holder" style={iconHolder}>
                <a target="_blank" rel="noreferrer" href={props.github}>
                  <div className="github proj-icon" style={projIcon}>
                    {/* <div style={github}/> */}
                    <svg className="octicon octicon-mark-github v-align-middle" height="50" viewBox="0 0 16 16" version="1.1" width="50" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                  </div>
                </a>
                <a target="_blank" rel="noreferrer" href={props.live}>
                  <div className="demo proj-icon" style={projIcon}>
                    <b>{`</>`}</b>
                  </div>
                </a>
              </div>
            </div>
            <p style={{
              height: "170px"
            }}>
              {props.info}
            </p>
            <h3>Tech Used</h3>
            <div className="used-list" style={{
              display: "flex",
              justifyContent: "flex-start",
              flexWrap: "wrap"
            }}>
              {
                props.used.map(tool => {
                  return <div style={{
                    padding: "5px",
                    margin: "2px",
                    borderRadius: "10px",
                    backgroundColor: "black",
                    color: "white"
                  }}>{tool}</div>
                })
              }
            </div>
          </div>
      </div>
  );
}

export default ProjectCard;

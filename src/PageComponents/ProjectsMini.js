import React from 'react'
import ProjectCard from './ProjectCard'
import NewAsteriods from '../Images/NewAsteriods.png'
import CovidHackathon from '../Images/Hackathon.png'
import TicTacToeIcon from '../Images/TicTacToe.PNG'
import '../App.css';

function Projects() {
  const aboutStyle = {
    color: "#773030",
    textAlign: "left",
    padding: "10px",
    paddingLeft: "30px",
    minHeight: "100px",
    fontSize: "20px",
    backgroundColor: "pink"
  }

  const contentStyle = {
    margin: "0px",
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "16px",
    // padding: "5px",
    // paddingLeft: "0px",
    display: "flex",
    justifyContent: "flex-start",
    // alignItems: "center",
    // width: "100%",
    overflowY: "scroll",
  }
  
  return (
      <div style={aboutStyle} className="main-projects">
        <h3 >Recent Projects</h3>
        <div style={contentStyle} className="Projects-contianer">
            <ProjectCard 
                title="New Asteriods" 
                icon={NewAsteriods}
                info={`
                Inspired by the flexibility and opportunity to learn OOP while making interactive experiences for users
                Built an interactive and immersive battle game where two players play as ships that can change colors to avoid bullets.       
                `}
                live={`https://jalvarez2016.github.io/p5game/`}
                github={`https://github.com/jalvarez2016/p5game`}
                used={[`P5`, `JS`,`jQuery`,`Leshy SFMaker`]}
            />
            <ProjectCard 
                title="Anti-Covid"
                icon={CovidHackathon}
                info={`
                    A week long Hackathon project made by Jason Alvarez, 
                    Aldair Garcia, Talia Jeffrey. We seek to provide 
                    relief for those suffering through these tough times 
                    one way or another. We hope you find something that 
                    can better your day through our site!
                `}
                live={`https://silly-hugle-8bba6b.netlify.app/`}
                github={`https://github.com/jalvarez2016/Hackathon2020`}
                used={[`Javascript`, `React`, `New York Times API`]}
            />
            <ProjectCard
              title="TicTacToe"
              icon={TicTacToeIcon}
              info={`
                A one day project made by Jason Alvarez and Shemar Gordon.
                This project is a recreation of the game Tic-Tac-Toe and follows
                an Object Orientated approach in its development.
              `}
              live={`https://jalvarez2016.github.io/tic-tac-toe-marcy/`}
              github={`https://github.com/jalvarez2016/tic-tac-toe-marcy`}
              used={[`Javascript`, `HTML`, `CSS`]}
            />
        </div>
      </div>
  );
}

export default Projects;

import React from 'react'
import '../App.css';

const introContainer = {
    backgroundColor: "black",
    color: "white",
    minHeight: "300px",
    padding: "10px",
    textAlign: "left",
    paddingLeft: "50px"
}

const introStyle = {
    width: "80%",
    paddingLeft: "50px"
}

const titleStyle = {
    paddingLeft: "30px"
}

const aboutSection = {
    borderRadius: "10px",
    backdropFilter: "blur(3px)",
    backgroundClip: "padding-box",
    boxShadow: "10px 10px 10px rgba(44, 41, 38, 0.3)",
    padding: "10px",
    margin: "20px"
}

function Intro() {
  return (
      <div style={introContainer}>
        <h1>Well Hello There!</h1>
        <div className="about-section" style={aboutSection}>
            <h4 style={titleStyle}>About this site</h4>
            <p style={introStyle} className="about-intro">
                To start off, this site was made using React and React Router. 
                In fact, this portfolio was in part built so I could learn how to use
                React Router. Other than that I also wanted to get more experience with React,
                which opened the opportunity to learn React Router.
            </p>
        </div>
        <div className="about-section" style={aboutSection}>
            <h4 style={titleStyle}>About me</h4>
            <p style={introStyle} className="about-me">
                As for the type of person I am, I'm a creative, hardworking, collaborative kind of person. A lot of my 
                projects have been group projects, so I have a lot of experience in scoping out a project and understanding 
                how to communicate with other members in my team to get my piece to work the way it's intended. I also do my
                best to assist others who are learning code. I started learning to code when I was in high school due to a 
                program called CodeNation and have begun volunteering for them as a way to give new generations the same opportunities
                that I've recieved. I've also written a few blogs on coding that I hope can help people learning new coding concepts while making it fun.
            </p>
            <p style={introStyle} className="about-me">
                I also happen to draw every now and then. I also make it a habit to sketch out a page or two every day to keep 
                improving. Of course, I try to do the same with code but sometimes it feels unresponsible to push up something that's unstable.
                
            </p>
        </div>        
        <div className="about-section" style={aboutSection}>
            <h4 style={titleStyle}>About my Tech Skills</h4>
            <p style={introStyle} className="about-me">
                As for my tech skills, I am an aspiring software developer with some internship experience 
                at a web design company, ATTCK. Before we get to that though, I should list my skills.
                My skills are mostly centered on web development, with a firm grasp on Javascript, HTML,
                CSS, and React. Over the years, I've also had some experience with C++, C#, Python, Firebase,
                Wordpress, YAML, and Unity. Some of these skills were aquired through my internship and others 
                personal interest.
                <br/>
            </p>
            <p style={introStyle} className="about-me">
                Unity, the well known game engine, uses the language C#. As such, I took it to myself to 
                learn how to use the language and joined an group that helped people learn how to use Unity. That 
                organizationis called SIA, and I'm eternally thankful to them since I was having trouble getting 
                a hang of Unity. Other than Unity, I have dabbled in game development quite a bit, though not as much
                as web development.
            </p>
        </div>
      </div>
  );
}

export default Intro;

import React from 'react'
import '../App.css';
// import {Link} from 'react-router-dom';

function Banner() {
  const bannerStyle = {
      color: "transparent",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxHeight: "300px",
      minHeight: "100px",
  }
  
  return (
      <div style={bannerStyle} className="Banner">
          <h3>Welcome</h3>
      </div>
  );
}

export default Banner;

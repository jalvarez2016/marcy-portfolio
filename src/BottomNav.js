import React from 'react'
import './App.css';
import {Link} from 'react-router-dom';

function BottomNav() {
  const navStyle = {
      color: "rgb(119, 48, 48)"
  }
  
  return (
    <nav className='navBar bottom'>
        <ul className='navItems'>
          <Link style={navStyle} to="/about">
              <li>About</li>
          </Link>
          <Link style={navStyle} to="/">
              <li>Main</li>
          </Link>
          <Link style={navStyle} to='/projects'>
            <li>Projects</li>
          </Link>
        </ul>
    </nav>
  );
}

export default BottomNav;

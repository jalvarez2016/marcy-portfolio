import React from 'react'
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  const navStyle = {
      color: "rgb(119, 48, 48)",
      textDecoration: "none"
  }

  return (
    <nav className='navBar top'>
        <Link style={navStyle} to="/">
          <h3>Logo</h3>
        </Link>
        <ul className='navItems'>
          <Link style={navStyle} to="/about">
              <li>About</li>
          </Link>
          <Link style={navStyle} to='/projects'>
            <li>Projects</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Nav;

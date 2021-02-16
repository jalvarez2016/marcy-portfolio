import React from 'react'
import './App.css';
import Logo from './Images/Logo-Portfolio.png'
import {Link} from 'react-router-dom';

function Nav() {
  const navStyle = {
      color: "rgb(119, 48, 48)",
      textDecoration: "none"
  }

  const logoStyle = {
    height: "100px"
  }

  return (
    <nav className='navBar top'>
        <Link style={navStyle} to="/">
          {/* <h3>Logo</h3> */}
          <img style={logoStyle} src={Logo} alt="Logo"/>
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

import React from 'react'
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: "white"
    }

    return (
      <nav className='navBar'>
          <h3>Logo</h3>
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

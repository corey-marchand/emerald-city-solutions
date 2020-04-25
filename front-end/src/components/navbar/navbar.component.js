import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import './navbar.styles.scss';

const NavigationBar = () => (
  <>
    <div className="navbar-logo">
        <Link className="logo-text" to='/'>Corey Marchand</Link>
        <p className="underlogo-text">Full-Stack Javascript Web Developer</p>
    </div>
    <div className="navbar-container">
      <ul className="navbar-menu">
        <li className="navbar-link"><Link  className='navbar-text' to='/about'>About</Link></li>
        <li className="navbar-link"><Link className='navbar-text' to='/portfolio'>Projects</Link></li>
        <li className="navbar-link"><Link className='navbar-text' to='/skills'>Skills</Link></li>
        <li className="navbar-link"><Link className='navbar-text' to='/contact'>Contact</Link></li>
      </ul>
    </div>
  </>
)

export default NavigationBar;
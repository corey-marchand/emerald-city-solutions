import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import './navbar.styles.scss';

const NavigationBar = () => (
  <>
    <div className="navbar-container">
      {/* <div className="navbar-logo">
          <Link className="logo-text" to='/'>Corey Marchand</Link>
      </div> */}
      <ul className="navbar-menu">
        <li className="navbar-link"><Link className='navbar-text' to='/'>Home</Link></li>
        <li className="navbar-link"><Link className='navbar-text' to='/about'>About</Link></li>
        <li className="navbar-link"><Link className='navbar-text' to='/portfolio'>Projects</Link></li>
        <li className="navbar-link"><Link className='navbar-text' to='/skills'>Skills</Link></li>
        <li className="navbar-link"><Link className='navbar-text' to='/contact'>Contact</Link></li>
      </ul>
    </div>
  </>
)

export default NavigationBar;
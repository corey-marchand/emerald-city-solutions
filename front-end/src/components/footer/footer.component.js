import React from 'react';
import './footer.styles.scss';
import { Route , withRouter} from 'react-router-dom';

import FbLogo from '../img/fb.png';
import IgLogo from '../img/ig.png';
import LiLogo from '../img/li.png';
import { Link } from 'react-router-dom';
import Home from '../../pages/home/home.component';
import About from '../../pages/about/about.component';
import Skills from '../../pages/technologies/technologies.components';
import Portfolio from '../../pages/portfolio/portfolio.component';
import Form from '../../components/contact-form/contact-form.component';

import { BrowserRouter as Router, Switch } from "react-router-dom";
class Footer extends React.Component {
    render(){
        return (
            <>
            <div className="footer-container">

                <div className="footer-sec-container">

                    <div className='social-media-section'>
                        <h3 className="social-media-title">Stay Connected</h3>
                        <ul>
                            <a href="www.facebook.com">
                                <img className="social-media-logo" src={FbLogo} alt="fb-logo"/>
                            </a> 
                            <a href="www.instagram.com">
                                <img className="social-media-logo" src={IgLogo} alt="ig-logo"/>
                            </a>
                            <a href="www.linkedin.com">
                                <img className="social-media-logo" src={LiLogo} alt="li-logo"/>
                            </a>                     
                        </ul>
                        <div className="copy-right">Copyright &copy; 2020 Corey Marchand</div>
                        <div className="copy-right">All Rights Reserved. Made in WA</div>
                    </div>

                    <div className="alternate-web-section">
                        <h3 className="alternate-web-title">Site Links</h3>
                        <ul className="footer-menu">    
                             <li className="alternate-link"><a href="/">Home</a></li>
                             <li className="alternate-link"><a href="/about">About</a></li>
                             <li className="alternate-link"><a href="/portfolio">Portfolio</a></li>
                             <li className="alternate-link"><a href="/skills">Skills</a></li>
                             <li className="alternate-link"><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                </div>

            </div>
            </>
        )
    }
}

export default withRouter(Footer);
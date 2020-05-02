import React from 'react';
import './home.styles.scss';
import Button from '../../components/button/button.component';
import { createBrowserHistory as history} from 'history';


class Home extends React.Component{
  render(){
    return(
    <>
      <div className='home-container'>
        <h2 className='title'>Quality Websites.</h2>
        <h2 className="sub-title">Superior Communication</h2>
        <h2> </h2>
        <br />
        <br />
        <br />
        <p className="home-text">I am a full-stack javascript developer located just outside Seattle, Washington. I enjoy programming websites and even mobile apps for businesses. If you are a business looking to create a website and establish an online presence, look no further. I would love to get the opportunity to work for YOU</p>
        <div className="button-container">
          <Button path=""className="hm-button">Hire Me</Button>
          <Button className="cm-button" onClick={() => this.props.history.push('/contact')}>Contact Me</Button>        
        </div>
      </div>
      {/* <div className="home-subsection">

      </div> */}
    </>
    )
  }
};

export default Home;
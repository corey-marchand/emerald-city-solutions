import React from 'react';
import './home.styles.scss';
import Button from '../../components/button/button.component';
// import Logo from '../../components/img/computer.svg';


class Home extends React.Component{
  render(){
    return(
    <>
      <div className='home-title'>Corey Marchand</div>
      <div className='home-container'>
        <div className="titles-container">
        </div>
        <br />
        <br />
        <br />
        <div className='home-content-container'>
          <p className="home-text">Hello! My name is Corey Marchand. I am a full-stack Javascript software developer based out of Seattle, Wa. If I am not freelancing, I can be found at the gym, working on the next popular computer language, or listening to a podcast.</p>
          <br />
          <p className="home-subtext">My skills cover a wide variety, including JavaScript(react, reactNative, NodeJs), html, CSS, and Python.  When I have a small amount of free time, I work on understanding system design and Search Engine Optimization (SEO) a little more.</p>
          {/* <div className="button-container">
            <Button path=""className="hm-button">Hire Me</Button>
            <Button className="cm-button" onClick={() => this.props.history.push('/contact')}>Contact Me</Button>        
          </div> */}
        </div>
      </div>
      {/* <div className="home-subsection">

      </div> */}
    </>
    )
  }
};

export default Home;
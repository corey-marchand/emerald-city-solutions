import React from 'react';
import './about.styles.scss';




const About = () => (
  <>
  <div className='about-container'>
    <h2 className='about-title'>I'M A</h2>
    <h2 className='about-subtitle'>FULLSTACK JS DEVELOPER</h2>
    <br />
    <br />
    <div className="about-me-subsection">
      <div className="about-me-sub-container">
        <div className="about-me-section-1">
          <h2>What I've done</h2>
          <p className="about-me-p"> Before becoming a developer, I was in the sales but more specifically, I was sales in the Flooring industry.  Quickly, I realized it was not the </p>
        </div>
        <div className="about-me-section-2">
          <h2>What I'm doing</h2>
          <p className="about-me-p">Before becoming a developer, I was in the sales but more specifically, I was sales in the Flooring industry.  Quickly, I realized it was not the </p>
        </div>
        <div className="about-me-section-3">
          <h2>What I'm Planning</h2>
          <p className="about-me-p">>Before becoming a developer, I was in the sales but more specifically, I was sales in the Flooring industry.  Quickly, I realized it was not the </p>
        </div>
      </div>
    </div>
  </div>
  </>
);

export default About;
import React from 'react';
import './portfolio.styles.scss';
import Logo from '../../images/seattle.jpg';
import Slider from '../../components/slider/slider.component';
import Images from '../../images/images';

class Portfolio extends React.Component{
  render(){
    return(
      <Slider slides={Images} />
    )
  }
};

export default Portfolio;
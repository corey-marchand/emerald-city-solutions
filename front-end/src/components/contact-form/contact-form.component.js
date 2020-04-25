import React, { Component } from 'react';
import './contact-form-styles.scss';
import styled from 'styled-components';


const Input = styled.input ` 
   width: ${props => props.width};
   height: ${props => props.height};
   border-radius: 5px;
   border: 1px solid #cecece;
   box-sizing: border-box;
`
const Button = styled.button `
    width: ${props => props.width};
    border: none;
    color: ${props => props.btnColor};    
    outline: none;   
    cursor:pointer;
    border-radius: 5px;
    padding: 10px 15px;
    z-index: 101;
`
class Form extends Component {
  render(){
    return (
            <div className="form-container">
              <div className="form">
                <h2 className="form-title">Contact Me</h2>
                <p>Name:</p>
                <Input className="input-name-first" type="text" height="35px" width="120px" placeholder=" First Name"/>
                <Input className="input-name-last" type="text" height="35px" width="120px" placeholder=" Last Name"/>
                <p>Email:</p>
                <Input className="input-email" type="text" height="35px" width="250px" placeholder="Email"/>
                <p>Message:</p>
                <Input className="input-message" type="text" height="150px" width="250px" placeholder="Message"/>
                <Button className="button" width="200px"  btnColor="black">Submit</Button>
              </div>
              <div className="form-style-div"></div>
            </div>
          )
        }
}
export default Form;


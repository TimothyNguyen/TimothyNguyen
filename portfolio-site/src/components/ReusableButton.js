import React, { Component } from 'react';
import './ReusableButton.css';
import {FaLinkedin, FaGithub, FaFilePdf} from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';

class ReusableButton extends Component {
    
   handleUrl = url => {
       window.open(url);
   }

   render() {
       return(
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
           <div styles="container">
               <Button variant="light"
                style={style}
                onClick= {() => this.handleUrl("https://www.linkedin.com/in/timothy-nguyen-414525144/")}>
                <FaLinkedin size={70} />   
               </Button>
               &nbsp;&nbsp;
               <Button variant="light"
                style={style}
                onClick= {() => this.handleUrl("https://github.com/TimothyNguyen")}>
                <FaGithub size={70}/>   
               </Button>
               &nbsp;&nbsp;
                <Button variant="light"
                    style={style}
                    onClick= {() => this.handleUrl("./resume")}>
                    <FaFilePdf size={70}/>   
                </Button>       
           </div>
           </IconContext.Provider>
            
       )
   }
}

var style = {
    textDecoration: "none",
    borderRadius: "5px",
    border: "none",
    transition: "0.5s",
    textAlign: "center",
    // fontSize: "13.5pt"
};


export default ReusableButton;
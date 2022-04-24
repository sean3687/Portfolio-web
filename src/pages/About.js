import React,{useState} from 'react';
import styled from "styled-components";
import {motion} from 'framer-motion'
import CodeSkillItem from "./CodeSkillItems";
import { IconContext } from 'react-icons'
import VisualSkillItem from "./VisualSkillItems";
import "./About.css"



function About(props) {

    console.log("Dashboard props", props);
    return (
       
        <IconContext.Provider value={{color: '#fff'}}>
        <div className="App">
                <h4>About Me</h4>
                <div className = "container"><h2>About</h2></div>
                <p className = "app-p">Hello! My name is Sean and I enjoy creating things that live on the internet. My interest in App/web development started back in 2018 when I decided to make "Overwatch workshop code sharing platform" 
                    — turns out having interest on solving problem by software and conduct business.
                    <br></br>
                    <br></br>
                    Fast-forward to today, and I’ve had the privilege of <span className ="hover-underline-animation">working at an web agency</span> and <span className ="hover-underline-animation">a start-up</span>. 
                    My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients. 
                    <br></br>
                    <br></br>
                    I also recently <span className ="hover-underline-animation">launched a course</span> that covers everything you need to build a web app with the Spotify API using Node & React. 
                    Here are a few technologies I’ve been working with recently:</p>
               
     
        
            <h2 className = "code-skl-h2">Skills</h2>

            <div className = "code-skl">
                
                {CodeSkillItem.map(item =>{
                        return (
                        
                        <li className={item.cName}> 
                            {item.icon}
                            <p>{item.title}</p>   
                            
                        </li>
                        
                        )        
            
                    })}

        </div>
        
        </div>
        </IconContext.Provider>
       
    );
}

export default About;

import React,{useState} from 'react';
import styled from "styled-components";
import CodeSkillItem from "./CodeSkillItems";
import { IconContext } from 'react-icons'
import "./About.css"



function About(props) {

    const [items, setItems] = useState(CodeSkillItem)
    console.log("Dashboard props", props);
    return (
       
        <IconContext.Provider value={{color: '#fff'}}>
        <div className="App">
                
                <div><h2>About</h2></div>
                <p className = "app-p">Hello! My name is Sean, and I enjoy creating things that live on the internet. My interest in software development started back in 2018 when I decided to create an "Overwatch workshop code sharing platform." The platform was a success,garnering <a style={{textDecoration: 'none'}} className ="hover-underline-animation" href = "https://play.google.com/store/apps/details?id=com.practice.laon.workshop&hl=ko&gl=US" target="_blank" rel="noopener noreferrer">15,000 downloads</a> 
                    , and it was then that I realized my passion for solving problems with software and conducting business.
                    <br></br>
                    <br></br>
                    Fast-forward to today, and I’ve had the privilege of <span className ="hover-underline-animation">working at tech Start-ups</span>.
                    My main focus these days is participating in <span className ="hover-underline-animation">Replit bounties</span> and helping people solve problems with software engineering. 
                    <br></br>
                    <br></br>
                  
                </p>
               
     
        
            <h2 className = "code-skl-h2">Skills</h2>

            <div className = "code-skl">
            
                {CodeSkillItem.map((item) =>{
                    console.log("skill" + item.title)
                        return (
                        
                        <li className={item.cName} > 
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

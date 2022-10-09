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
                <p className = "app-p">Hello! My name is Sean and I enjoy creating things that live on the internet. My interest in App/web development started back in 2018 when I decided to make "Overwatch workshop code sharing platform" 
                    — turns out having interest on solving problem by software and conduct business.
                    <br></br>
                    <br></br>
                    Fast-forward to today, and I’ve had the privilege of <span className ="hover-underline-animation">working at an web agency</span>.
                    My main focus these days is building accessible, inclusive products and digital experiences. 
                    <br></br>
                    <br></br>
                    I also keep learning new features of Android and React library by <a style={{textDecoration: 'none'}} className ="hover-underline-animation" href = "https://medium.com/@yonghyun.jin11" target="_blank" rel="noopener noreferrer">posting Medium & Tistory blog. </a> Here are a few technologies I’ve been working with recently:</p>
               
     
        
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

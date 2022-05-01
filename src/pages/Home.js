import React from 'react';
import Resume from '../images/Resume.pdf'
import "./Home.css"
import {motion} from 'framer-motion'
import SocialMedia from "../function/SocialMedia";


const Home = props => {
    return (
        <motion.div initial = {{opactity: 0 }} animate = {{opactity: 1}} exit = {{opactity:0}}>
        <div className = "Title">
            
            <h4>Hi, my Name is,</h4>
            <h1>Sean Jin</h1>
            <p className = "title-paragraph"><span className="hover-underline-animation">I'm a software engineer based in Irvine, CA</span> sepecializing in building(and ocationally desgining) exceptional website,application, and everything in between</p>
            <p className = "title-resume">
                <a className ="resume-link" href={Resume} target="_blank">Resume</a>
                <a className="email-direct" href="mailto:yonghyun.jin11@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a>
            </p>

        </div>
        </motion.div>


        
    );
};

export default Home;

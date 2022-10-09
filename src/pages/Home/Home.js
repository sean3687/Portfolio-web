import React from 'react';
import Resume from '../../Assets/Resume.pdf'
import "./Home.css"
import {motion} from 'framer-motion'
import { Button, DocumentOpenIcon,SendMessageIcon } from 'evergreen-ui'


const Home = props => {
    return (
        <motion.div initial = {{opactity: 0 }} animate = {{opactity: 1}} exit = {{opactity:0}}>
        <div className = "Title">
            
            <h4>Hi, my Name is,</h4>
            <h1>Sean Jin</h1>
            <p className = "title-paragraph"><span className="hover-underline-animation">I'm a software engineer based in Irvine, CA</span> specializing in building(and ocationally desgining) exceptional website,application, and everything in between</p>
            <p className = "title-resume">
                <a href = {Resume} style ={{textDecoration : 'none'}}>
                    <Button className = "resume-link" iconBefore={DocumentOpenIcon} marginRight={0} height={40} >Resume</Button>
                </a>
                <a href="mailto:yonghyun.jin11@gmail.com" rel="noopener noreferrer" target="_blank" style ={{textDecoration : 'none'}}>
                    <Button className="email-direct" iconBefore={SendMessageIcon} padding={20} height={40} >Email</Button>
                </a>
                
            </p>

        </div>
        </motion.div>


        
    );
};

export default Home;

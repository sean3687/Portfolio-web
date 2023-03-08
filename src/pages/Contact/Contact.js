import React from 'react';
import "./Contact.css"
import {motion} from 'framer-motion'
import { projectInfoAnimation_right, projectInfoAnimation_left } from "../../function/animation";

function Contact(props) {
    return (
        <>
            <motion.div className = "contact" variants={projectInfoAnimation_right} transition={{ type: 'spring' }}>
                <h1>Get in Touch</h1>
                <p>Although I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            </motion.div>
            <motion.div className = "contact" variants={projectInfoAnimation_left} transition={{ type: 'spring' }}>
                <a className='email-link' href="mailto:yonghyun.jin11@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a>
            </motion.div>
        </>
    );
}

export default Contact;


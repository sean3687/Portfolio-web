import React from 'react';
import styled from "styled-components";
import "./Contact.css"
import {motion} from 'framer-motion'

function Contact(props) {
    return (
        <>
        
            <div>
                <h1>Get in Touch</h1>
                <p>Although I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            </div>
            <div >
                <a className='email-link' href="mailto:yonghyun.jin11@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a>
            </div>
        </>
    );
}

export default Contact;


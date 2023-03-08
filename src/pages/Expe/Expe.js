import React from 'react';
import "./Expe.css"
import {motion} from 'framer-motion'
import { projectInfoAnimation_right, projectInfoAnimation_left } from "../../function/animation";
import ExpeList from "./ExpeComponent"

function expe(props) {
    return (
        <>
            <motion.div className = "contact" variants={projectInfoAnimation_right} transition={{ type: 'spring' }}>
                <h1>Experience</h1>
                <p>I have had the opportunity to work on a wide range of projects, from developing variety web/app service. I've had the pleasure of working with some amazing teams, where I've honed my skills in agile methodologies, project management, and software development best practices.</p>
                <div className="table">
                    <ExpeList></ExpeList>
                </div>
                
            </motion.div>
        </>
    );
}

export default expe;

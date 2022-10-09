import { motion } from 'framer-motion';
import { projectAnimations, projectInfoAnimation_left, projectInfoAnimation_right } from "../../function/animation";
import * as FaIcons from "react-icons/fa";
import React from 'react'
import { useScroll } from '../../function/useScroll';

function ProjectTile(props){
    const [element, control] = useScroll()
    const project = props.element
    const library = props.element.libraries
  
  return (
    
    <div className = "item">
            <motion.div variants={projectInfoAnimation_left} ref={element} animate = {control} className = "left_container">
                <motion.img variants={projectAnimations} whileHover={{ scale: 1.05, zIndex:5}} whileTap={{ scale: 0.8}} className ="left" 
                src={project.src}
                ></motion.img> 
            </motion.div>
            <motion.div className = "right" variants={projectInfoAnimation_right} ref={element} animate = {control}>
                <h3>{project.heading3}</h3>
                <h2>{project.heading2}</h2>
                <p>{project.description}</p>
                <ul>
                  {library.map(item =>{

                    return (<li>{item}</li>)
                  })}
                </ul>
                <div className=""></div>
                <div className = "href-links">
                  <a className = "href-icon" href={project.git}><FaIcons.FaGithub/> </a>
                </div>
            </motion.div>

    </div>
  )
}

export default ProjectTile
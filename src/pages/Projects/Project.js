import React from 'react';
import "./Project.css";
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';
import { projectInfoAnimation_right } from "../../function/animation";
import { useScroll } from "../../function/useScroll"
import ProjectItems from "./ProjectItems.jsx"
import ProjectTiles from "./ProjectTile"


function Project() {
  const [element1, controls1] = useScroll();

  return (
    <>
    <IconContext.Provider value= {{color: '#fff'}}>
      <div className ='project'>
        <motion.h1 className = "left_container" variants={projectInfoAnimation_right} ref={element1} animate = {controls1} transition={{ type: 'spring' }}>Some Things I've Built</motion.h1>
        <motion.div className = "project_description" variants={projectInfoAnimation_right} transition={{ type: 'spring' }}>
        <p>
       Here you'll find a collection of some of my recent coding projects, showcasing my skills and expertise in a variety of programming languages and frameworks.  Each project comes complete with a description, key features, and links to the source code and any relevant demos. 
        <br></br> Whether you're interested in learning more about my coding abilities or looking for inspiration for your next project, I hope you'll find something of interest here.</p>
        </motion.div>
        
        <div className='all-item'>
          {ProjectItems.map((item)=>{
            return (
              <div>
               <ProjectTiles element ={item}></ProjectTiles>
              </div>
            //
            )
          })}
          
        
       </div>
      </div>
    </IconContext.Provider>
    </>
   
  );
}

export default Project;
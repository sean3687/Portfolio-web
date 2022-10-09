import React from 'react';
import "./Project.css";
import * as FaIcons from "react-icons/fa";
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';
import { projectAnimations, projectInfoAnimation_left, projectInfoAnimation_right } from "../../function/animation";
import { useScroll } from "../../function/useScroll"
import ProjectItems from "./ProjectItems.jsx"
import ProjectTiles from "./ProjectTile"


function Project() {
  const [element1, controls1] = useScroll();

  return (
    <>
    <IconContext.Provider value= {{color: '#fff'}}>
      <div className ='project'>
        <motion.h1 variants={projectInfoAnimation_right} ref={element1} animate = {controls1} className = "left_container" transition={{ type: 'spring' }}>Some Things I've Built</motion.h1>
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
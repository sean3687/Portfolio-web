import React from 'react';
import "./Project.css";
import chronology from "../images/myChronology.png";
import weather from "../images/myWeather.png";
import overwatch from "../images/overWatchCode.png";
import portfolio from "../images/portfolio.png";
import * as FaIcons from "react-icons/fa";
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';
import { projectAnimations, projectInfoAnimation_left, projectInfoAnimation_right } from "../function/animation";
import { useScroll } from "../function/useScroll"


function Project(props) {
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();

  return (
    <>
    <IconContext.Provider value= {{color: '#fff'}}>
      <div className ='project'>
        
        <motion.h1 variants={projectInfoAnimation_right} ref={element1} animate = {controls1} className = "left_container" transition={{ type: 'spring' }}>Some Things I've Built</motion.h1>
        <div className='all-item'>
          <div className = "item">
              <motion.div variants={projectInfoAnimation_left} ref={element1} animate = {controls1} className = "left_container">
                  <motion.img variants={projectAnimations} whileHover={{ scale: 1.05, zIndex:5}} whileTap={{ scale: 0.8}} className ="left" src={chronology}></motion.img> 
              </motion.div>
              <motion.div className = "right" variants={projectInfoAnimation_right} ref={element1} animate = {controls1}>
                <h3>Kotlin Proejct</h3>
                <h2>Habits TODO-List</h2>
                <p>Habits TODO-List helps you create and maintain positive habit in your life. 
                      Used various android jetpack libaray such as, Fragment ResultAPI, Fragment Manager, DiffUtil and Navigation Components</p>
                <ul>
                  <li>Kotlin</li>
                  <li>Room-Database</li>
                  <li>Calendar Library</li>
                  <li>Android Jetpack Library</li>
                  <li>Material Design</li>
                </ul>
                <div className=""></div>
                <div className = "href-links">
                  <a className = "href-icon" href="https://github.com/sean3687/Chronology-Project/tree/master/MyChronology"><FaIcons.FaGithub/> </a>
                </div>
              </motion.div>
          </div>
          
        

          <div className = "item">
          <motion.div variants={projectInfoAnimation_left} ref={element2} animate = {controls2} className = "left_container">
                  <motion.img variants={projectAnimations} whileHover={{ scale: 1.05, zIndex:5}} whileTap={{ scale: 0.8}} className ="left" src={weather}></motion.img> 
              </motion.div>
              <motion.div className = "right" variants={projectInfoAnimation_right} ref={element2} animate = {controls2}>
              <h3>Kotlin Proejct</h3>
              <h2>The Weather Channel API</h2>
              <p>Provide current weather based on your location. Under Current weather specification, You can view a 7 day weather forecast. If you want weather of any city or country, you can look for on search tab and you will able to access current weather specification of destination</p>
              <ul>
                  <li>Kotlin</li>
                  <li>Retrofit</li>
                  <li>Gson</li>
                  <li>Lottie</li>
                  <li>Android Stduio</li>
              </ul>
              <div className = "href-links">
                <a className = "href-icon" href="https://github.com/sean3687/Learning-projects-2/tree/master/myweatherAPI"><FaIcons.FaGithub/></a>
              </div>
            </motion.div>     
          </div>
      
       
          <div className = "item">
          <motion.div variants={projectInfoAnimation_left} ref={element3} animate = {controls3} className = "left_container">
                  <motion.img variants={projectAnimations} whileHover={{ scale: 1.05, zIndex:5}} whileTap={{ scale: 0.8}} className ="left" src={portfolio}></motion.img> 
              </motion.div>
              <motion.div className = "right" variants={projectInfoAnimation_right} ref={element3} animate = {controls3}>
            
                <h3>React Proejct</h3>
                <h2>Porfolio</h2>
                <p>A web App for portfolio. Framer motion provides a better visual experience. Heroku allows you to access a portfolio on any device with the internet.</p>
                <ul>
                  <li>React</li>
                  <li>Heroku</li>
                  <li>Framer</li>
                  <li>Routes</li>
                  <li>Styled Components</li>
                </ul>
                <div className = "href-links">
                  <a className = "href-icon" href="https://github.com/sean3687/Portfolio-web"><FaIcons.FaGithub/></a>
                </div>
            </motion.div>
          </div>

          <div className = "item">
          <motion.div variants={projectInfoAnimation_left} ref={element4} animate = {controls4} className = "left_container">
                  <motion.img variants={projectAnimations} whileHover={{ scale: 1.05, zIndex:5}} whileTap={{ scale: 0.8}} className ="left" src={overwatch}></motion.img> 
              </motion.div>
              <motion.div className = "right" variants={projectInfoAnimation_right} ref={element4} animate = {controls4}>
                <h3>Java Proejct</h3>
                <h2>Overwatch Workshop Code Collection</h2>
                <p>Provide popular overwatch workshop codes by nation. Multiple listview inside each navigation menu. Available on google play store. First app made with JAVA.</p>
                <ul>
                  <li>Java</li>
                  <li>AndroidStudio</li>
                  <li>ListView</li>
                </ul>
                <div className = "href-links">
                  <a className = "href-icon" href="https://play.google.com/store/apps/details?id=com.practice.laon.workshop"><FaIcons.FaGooglePlay/></a>
                  <a className = "href-icon" href="https://drive.google.com/file/d/1ZRdht32_ax1Gfiwus-ObNJgpBcIMpnKy/view?usp=sharing"><FaIcons.FaGithub/></a>
             
                </div>
                </motion.div>
          </div>
        </div>
        
       
    </div>
    </IconContext.Provider>
    </>
   
  );
}

export default Project;
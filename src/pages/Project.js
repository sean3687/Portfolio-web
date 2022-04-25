import React from 'react'
import "./Project.css"
import chronology from "../images/myChronology.png"
import weather from "../images/myWeather.png"
import overwatch from "../images/overWatchCode.png"
import portfolio from "../images/portfolio.png"
import { FaFileExcel } from 'react-icons/fa'

function Project(props) {
  return (
    <div className ='project'>
        <h1>Some Things I've Built</h1>
        <div className='all-item'>
          <div className = "item">
              <img className ="left" src={chronology}></img> 
              <div className = "right">
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
                <a>github</a>
              </div>
          </div>
          
        

          <div className = "item">
            <img className="left" src={weather}></img>
            <div className = "right">
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
              <a>github</a>
            </div>     
          </div>
      
       
          <div className = "item">
            <img className = "left"src={portfolio}></img>
            <div className = "right"> 
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
                <a>github</a>
            </div>
          </div>

          <div className = "item">
             <img className = "left"src={overwatch}></img>
             <div className = "right"> 
                <h3>Java Proejct</h3>
                <h2>Overwatch Wrokshop Code Collection</h2>
                <p>Provide popular overwatch workshop code by Nation. Multiple listview inside each navigation menu. Available on google play store. First app made with JAVA.</p>
                <ul>
                  <li>Java</li>
                  <li>AndroidStudio</li>
                  <li>ListView</li>
                </ul>
                <a>Playstore</a>
                <a>github</a>
             </div>
          </div>
        </div>
    </div>
   
   
  );
}

export default Project;
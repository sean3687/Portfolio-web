import React, {useEffect, useState} from "react";
import SidebarItems from "./SidebarItems";
import {Link} from "react-router-dom";
import { FaIcon } from 'react-icons/fa';
import Logo from "../images/logo.jpg"
import './Sidebar.css'
import { useScroll } from "../function/useScroll"
import { motion } from "framer-motion"
import { navAnimation } from "../function/animation"



function Sidebar(props, {defaultActive,}) {
    const location = props.history.location;
    const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
    const lastActiveIndex = Number(lastActiveIndexString);
    const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);
      

    function changeActiveIndex(newIndex) {
        localStorage.setItem("lastActiveIndex", newIndex)
        setActiveIndex(newIndex)
    }

    function getPath(path) {
        if (path.charAt(0) !== "/") {
            return  "/" + path;
        }
        return path;
    }

    useEffect(()=> {
        const activeItem = SidebarItems.findIndex(item=> getPath(item.route) === getPath(location.pathname))
        changeActiveIndex(activeItem);
    }, [location])

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [element, controls] = useScroll();

    return (
        <>
            <nav className = "nav-bar">
                <div className = "logoText">
                    <img src={Logo}></img>
                    <h2>Sean Jin</h2>
                    
                </div>
    
                <motion.div className = "nav-div" ref={element} variants = {navAnimation} transition={ {delay: 0.1}} animate = {controls}>
                    <ul>
                        {SidebarItems.map((item, index)=> {
                            return (
                            <li key={index} className={item.cName} active={index === activeIndex}>
                                
                                    <Link to={item.route}  >
                                    
                                        <p>{item.icon}</p>
        
                                        <span style={{color: `${props => props.active ? "#000000" : "#828282"}`}}>{item.title}</span>
                                        {console.log(props)}
                                    </Link>
                                
                            </li>
                        )
                        })}
                    </ul>
                </motion.div>
                
            </nav>
     
    
        </>
    );
}


export default Sidebar;
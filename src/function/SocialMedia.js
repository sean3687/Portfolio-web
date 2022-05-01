import React from 'react';
import './SocialMedia.css'
import { IconContext } from 'react-icons'
import SocialMediaItems from "./SocialMediaItems";
import {motion} from 'framer-motion'



function SocialMedia(props) {
    return (
        <>
        <IconContext.Provider value={ {color: '#000000'}}>
        <div className = "sns-div" >
            {SocialMediaItems.map((item, index)=> {
                return (
                    
                    <motion.a 
                    whileHover={{ scale: 1.2, zIndex:5}} whileTap={{ scale: 0.8 }}  href={item.url} className ={item.cName} target ="blank" >
                        {item.icon}
                    </motion.a>
                    
                )
            })}
        </div>
        </IconContext.Provider>
       
           
        </>
    );
}

export default SocialMedia;

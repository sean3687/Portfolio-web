import React from 'react';
import './SocialMedia.css'
import { IconContext } from 'react-icons'
import SocialMediaItems from "./SocialMediaItems";

function SocialMedia(props) {
    return (
        <>
        <IconContext.Provider value= {{color: '#fff'}}>
        <div className = "sns-div" >
            {SocialMediaItems.map((item, index)=> {
                return (
                    <a href={item.url} className ={item.cName} target ="_blank" >
                        {item.icon}
                    </a>
                )
            })}
        </div>
        </IconContext.Provider>
           
        </>
    );
}

export default SocialMedia;

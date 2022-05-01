import React from 'react';
import './Footer.css'
import Logo from "../images/logo.jpg"
import SocialMedia from "../function/SocialMedia";
function Footer(){
    return(
        <div className = "container">
               
                <SocialMedia/>
                <p>Copyright © 2022 Yonghyun Jin</p>
                    
        </div>
    )
}
export default Footer;
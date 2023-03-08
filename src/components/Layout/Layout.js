import React from 'react';
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer.js"
import './Layout.css';


function Layout(props) {
    return (
        <div>

            <div className ="wrapper">
                <div className="Side">
                    <Sidebar className = "Sidebar" history={props.history}/>
                
                </div>
                <div className="line"></div>
                
                <div className = "Page">
                    {props.children}
                </div>
                <div className = "Footer">
                    <Footer/>
                </div>
                
                
            </div>
        </div>
    );
}

export default Layout;

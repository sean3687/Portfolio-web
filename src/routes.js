import React from "react";
import {BrowserRouter, Route, Switch, useLocation} from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Expe from "./pages/Expe/Expe"
import Project from "./pages/Projects/Project";
import Layout from "./components/Layout/Layout";
import {motion} from "framer-motion";

function Routes() {

    return (
        <motion.div initial = "hidden" animate = "show">
        
        <BrowserRouter>
        
            <Route render={(props)=>(
                
                <Layout {...props} >   
                        <Switch >
                            <Route path="/" exact component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path= "/expe" component={Expe}/>
                            <Route path="/project" component={Project}/>
                            <Route path ='/contact' component={Contact}/>
                        </Switch>
                    
                </Layout>
                
            )}/>
           
        </BrowserRouter>
        </motion.div>
        
    )
}

export default Routes;

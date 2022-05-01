import React from "react";
import {BrowserRouter, Route, Switch, useLocation} from "react-router-dom";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Layout from "./components/Layout";
import {motion} from "framer-motion";

function Routes() {

    const location = useLocation
    return (
        <motion.div initial = "hidden" animate = "show">
        
        <BrowserRouter>
        
            <Route render={(props)=>(
                
                <Layout {...props} >   
                        <Switch >
                            <Route path="/" exact component={Home}/>
                            <Route path="/about" component={About}/>
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

import React from "react";
import {BrowserRouter, Route, Switch, useLocation} from "react-router-dom";
import Blog from "./pages/Blog";
import {AnimatePresence} from 'framer-motion'
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Layout from "./components/Layout";

function Routes() {

    const location = useLocation
    return (
        
        <BrowserRouter>
        
            <Route render={(props)=>(
                
                <Layout {...props} >
                    <AnimatePresence initial = {false} exitBeforeEnter>   
                        <Switch >
                            <Route path="/" exact component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/project" component={Project}/>
                            <Route path="/blog" component={Blog}/>
                            <Route path ='/contact' component={Contact}/>
                        </Switch>
                    </AnimatePresence>    
                </Layout>
                
            )}/>
           
        </BrowserRouter>
        
    )
}

export default Routes;

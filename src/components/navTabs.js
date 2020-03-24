import React from 'react';
import Home from "./home";
import AboutMe from "./aboutme";
import Projects from "./projects";
import Contact from "./contact";
import Resume from "./resume";

import {Switch, Route} from 'react-router-dom';
const NavTabs = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/aboutme" component={AboutMe}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/projects" component={Projects}></Route>
            <Route exact path="/resume" component={Resume}></Route>
        </Switch>
    );
}

export default NavTabs;
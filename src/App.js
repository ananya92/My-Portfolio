import React from 'react';
import './App.css';
import { Layout, Header, Drawer, Navigation, Content} from 'react-mdl';
import NavTabs from "./components/navTabs";
import {Link} from 'react-router-dom';
function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header title="My Portfolio" scroll>
                <Navigation>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="My Portfolio">
                <Navigation>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <NavTabs></NavTabs>
            </Content>
        </Layout>
    </div>
  );
}

export default App;

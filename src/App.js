import React from 'react';
import './App.css';
import { Layout, Header, Drawer, Navigation, Content} from 'react-mdl';
function App() {
  return (
    <div style={{height: '100vh', position: 'relative'}}>
      <Layout style={{background: 'url(/images/cover.jpg) center / cover'}}>
          <Header transparent title="My Portfolio">
              <Navigation>
                  <a href="/">About Me</a>
                  <a href="/">Projects</a>
                  <a href="/">Resume</a>
                  <a href="/">Contact</a>
              </Navigation>
          </Header>
          <Drawer title="My Portfolio">
              <Navigation>
                  <a href="/">About Me</a>
                  <a href="/">Projects</a>
                  <a href="/">Resume</a>
                  <a href="/">Contact</a>
              </Navigation>
          </Drawer>
          <Content />
      </Layout>
  </div>
  );
}

export default App;

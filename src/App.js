import React from 'react';
import {Fabric} from 'office-ui-fabric-react/lib-commonjs/Fabric';
import NavBar from './components/NavBar.js';
import SidebarMenu from './components/SidebarMenu.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';
import { BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Fabric className="App">       
          <div className="header">
            <NavBar />
          </div>        
          <div className="body">
            <div className="content">
              <Content />
            </div>
            <div className="sidebar">
              <SidebarMenu />
            </div>      
          </div>
          <div className="footer">
            <Footer />
          </div>       
        </Fabric>
      </Router>
    );
  }
}

export default App;
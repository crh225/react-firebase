import React from 'react';
import { Fabric } from 'office-ui-fabric-react/lib-commonjs/Fabric';
import { SidebarMenu, Footer, Content, NavBar } from './components';
import { BrowserRouter as Router } from 'react-router-dom';

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
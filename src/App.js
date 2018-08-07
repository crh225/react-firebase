import React from 'react';
import { Fabric } from 'office-ui-fabric-react/lib-commonjs/Fabric';
import * as comp from './components';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Fabric className="App">
          <div className="header">
            <comp.NavBar />
          </div>
          <div className="body">
            <div className="content">
              <comp.Content />
            </div>
            <div className="sidebar">
              <comp.SidebarMenu />
            </div>
          </div>
          <div className="footer">
            <comp.Footer />
          </div>
        </Fabric>
      </Router>
    );
  }
}

export default App;
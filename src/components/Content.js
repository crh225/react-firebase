import React from 'react';
import HelloWorld from './HelloWorld.js';
import {Route} from 'react-router-dom';
import '../_styles/Content.css';

class Content extends React.Component {
  render() {
   
    return (
      <div className="container">
        main container
        <Route path='/hello' component={HelloWorld}/>
      </div>
    )
  }
}


export default Content
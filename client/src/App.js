import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Login from './Containers/login/login';

class App extends Component{
  render(){
    return(
      <div>
        <Route path="/" component={Login} />
      </div>
    )
  }
}

export default App;

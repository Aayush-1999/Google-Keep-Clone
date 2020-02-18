import React, { Component } from 'react';
import {Route , Redirect} from 'react-router-dom';
import LoginEmail from './Containers/login/login-email';
import LoginPassword from './Containers/login/login-password';

class App extends Component{
  render(){
    return(
      <div>
        <Route path="/signin" exact component={LoginEmail} />
        <Redirect from="/" to="/signin" />
        <Route path="/signin/pwd" exact component={LoginPassword} />
      </div>
    )
  }
}

export default App;

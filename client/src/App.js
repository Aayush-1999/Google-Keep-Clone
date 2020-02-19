import React, { Component } from 'react';
import {Route , Redirect} from 'react-router-dom';
import LoginEmail from './Containers/login/login-email';
import LoginPassword from './Containers/login/login-password';
import SignUp from './Containers/signup/signup';

class App extends Component{
  render(){
    return(
      <div>
        <Route path="/signin" exact component={LoginEmail} />
        <Redirect from="/" to="/signin" />
        <Route path="/signin/pwd" exact component={LoginPassword} />
        <Route path="/signup" exact component={SignUp} />
      </div>
    )
  }
}

export default App;

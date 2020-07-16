import React, { Component } from 'react';
import {Route , Redirect, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import LoginEmail from './Containers/login/email/login-email';
import LoginPassword from './Containers/login/password/login-password';
import SignUp from './Containers/signup/signup';
import Layout from './hoc/Layout/Layout';
import Home from './Containers/Home/Home';
import Auxiliary from './hoc/Auxiliary/Auxiliary';
import * as actions from './store/actions/index';

class App extends Component{
  componentDidMount(){
    this.props.onCheckAuthState()
  }

  render(){
    let routes=(
      <Switch>
        <Route path="/" exact><Redirect to="/signin" /></Route>
        <Route path="/signin" exact component={LoginEmail} />
        <Route path="/signin/pwd" exact component={LoginPassword} />
        <Route path="/signup" exact component={SignUp} />
        <Redirect to="/" />
      </Switch>
    )
    
    if(this.props.isAuthenticated){
      routes=(
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      )
    }
    return(
        <Auxiliary>
          {routes}
        </Auxiliary>
    )
  }
}

const mapStateToProps=state=>{
  return{
    isAuthenticated:state.auth.authenticated
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    onCheckAuthState:()=>dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

import React, { Component } from 'react';

import { connect } from "react-redux"

import { Switch, Route } from 'react-router-dom';

import { setCurrentUser } from "./redux/user/user.action"

import Principal from "./pages/principal/Principal"
import Home from "./pages/home/home"

import { auth } from "./firebase/firebase.util"

import './App.scss';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {dispatchSetCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        dispatchSetCurrentUser(userAuth.email)
      
      }else{
        dispatchSetCurrentUser(userAuth)
      }
    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props
    return (
      <div className="app" >
        <Switch>
          <Route exact path="/" render={()=> currentUser ? <Home/> : <Principal/>}/>
        </Switch>
        
      </div>
    );
  }
}

const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser
})


const mapDispatchToProps = dispatch =>({
  dispatchSetCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);

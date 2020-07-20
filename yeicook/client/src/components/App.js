import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import AuthService from './../service/AuthService'

import { Switch, Route } from 'react-router-dom'

import Navigation from './ui/navbar'

// import ChefsList from './chefs/chefList/'
import Signupform from './auth/signup-form/index'
import Loginform from './auth/login-form/index'

class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedInUser: undefined
    }
    this.AuthService = new AuthService()
  }

  setTheUser = user => this.setState({ loggedInUser: user }, () => console.log("El estado de App ha cambiado:", this.state))

  render() {
    return (
    
      <>
        <Navigation setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser}/>

        <Switch>
        
          <Route path="/signup" render={props => <Signupform {...props} setTheUser={this.setTheUser}/>} />
          <Route path="/login" render={props => <Loginform {...props} setTheUser={this.setTheUser}/>} />

        </Switch>

      </>
    )
  }
}

export default App;

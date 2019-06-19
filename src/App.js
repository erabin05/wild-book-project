import React, {useEffect} from 'react'
import { connect } from "react-redux";
import './App.scss'
import './Components/Pictos/_pictos.scss'

import { Route } from 'react-router-dom'

import Header from './Components/Header/Header'
import User from './Components/User/User'
import Admin from './Components/Admin/Admin'
import Log from './Components/Authentification/Log'

import {setScreenSize} from './Reducers/screenSize/action'

const mapDispatchToProps = dispatch => ({
  setScreenSize: () => dispatch( setScreenSize(window.innerWidth) )
});

const App = ({setScreenSize}) => {

  useEffect(() =>   {
    window.addEventListener('resize', setScreenSize)
  })

  return (
    <main>
      <Header/>
      <Route path='/' component={User}/>
      <Route exact path='/Admin' component={Admin}/>
      <Route exact path='/log' component={Log}/>
    </main>
  )
}

export default connect(
  null,
  mapDispatchToProps
  )(App)

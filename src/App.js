import React, {useEffect} from 'react'
import { connect } from "react-redux";
import './App.scss'

import User from './Components/User/User'

import {setScreenSize} from './Reducers/screenSize/action'


const App = ({screenSize, setScreenSize}) => {

  useEffect(() =>   {
    window.addEventListener('resize', setScreenSize)
  })

  return (
    <main>
      <User/>
    </main>
  )
}

const mapStateToProps = state => ({
  screenSize: state.screenSize
});

const mapDispatchToProps = dispatch => ({
  setScreenSize: () => dispatch( setScreenSize(window.innerWidth) )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App)

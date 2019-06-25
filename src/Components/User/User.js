import React from 'react'
import './user.scss'

import { Route } from 'react-router-dom'

import ProjetcDisplay from './ProjectsDisplay'
import DedicatedPage from './DedicatedPage/DedicatedPage'
import Header from '../Header/Header'

const User = () => (
    <div>
        <Route exact path='/' component={Header}/>
        <Route path='/of/:id' component={Header}/>
        <Route exact path='/' component={ProjetcDisplay}/>
        <Route path='/of/:id' component={DedicatedPage}/>
    </div>
)

export default User

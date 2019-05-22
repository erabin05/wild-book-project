import React from 'react'
import './user.scss'

import { Route } from 'react-router-dom'

import ProjetcDisplay from './ProjectsDisplay'
import DedicatedPage from './DedicatedPage/DedicatedPage'


const User = () => (
    <div>
        <Route exact path='/' component={ProjetcDisplay}/>
        <Route path='/:id' component={DedicatedPage}/>
    </div>
)

export default User

import React from 'react'
import './user.scss'

import ProjetcDisplay from './ProjectsDisplay'

const projects = [
    {
        title : 'My project Title',
        students : [
            'Etienne RABIN',
            'Clement BECHETOILLE',
            'Thomas CULDAUT'
        ]
    },
    {
        title : 'My other project Title',
        students : [
            'Julien RABIN',
            'Maxime CORNIAU',
            'Edouard METZ'
        ]
    },
]

const User = () => <ProjetcDisplay projects={projects}/>

export default User
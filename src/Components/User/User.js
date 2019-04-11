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
    {
        title : 'A project of my own making',
        students : [
            'Mathieu RABIN',
            'samuel GILLES',
            'justine DUBOIS',
            'sebastien JOLLY'
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
    {
        title : 'A project of my own making',
        students : [
            'Mathieu RABIN',
            'samuel GILLES',
            'justine DUBOIS',
            'sebastien JOLLY'
        ]
    },
    {
        title : 'My project Title',
        students : [
            'Etienne RABIN',
            'Clement BECHETOILLE',
            'Thomas CULDAUT'
        ]
    }
]

const User = () => <ProjetcDisplay projects={projects}/>

export default User
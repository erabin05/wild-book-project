import React from 'react'
import './user.scss'

import ProjetcDisplay from './ProjectsDisplay'

const projectsRows = [
    {
        categorie : 'Septembre 2018',
        projects : [
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
            },
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
    }
]

const User = () => <ProjetcDisplay projectsRows={projectsRows}/>

export default User
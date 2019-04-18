import React from 'react'
import './user.scss'

import ProjetcDisplay from './ProjectsDisplay'

const projectsRows = [
    {
        categorie : 'Fevrier 2018',
        projects : [
            {
                id : 511,
                title : 'A project of my own making',
                students : [
                    'Mathieu RABIN',
                    'samuel GILLES',
                    'justine DUBOIS',
                    'sebastien JOLLY'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : 'http://localhost:3000/',
                githubLink : 'https://github.com/erabin05/wild-book-project'
            },
            {
                id : 512,
                title : 'My other project Title',
                students : [
                    'Julien RABIN',
                    'Maxime CORNIAU',
                    'Edouard METZ'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : 'a',
                githubLink : 'a'
            },
            {
                id : 513,
                title : 'A project of my own making',
                students : [
                    'Mathieu RABIN',
                    'samuel GILLES',
                    'justine DUBOIS',
                    'sebastien JOLLY'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : 'a',
                githubLink : 'a'
            },
            {
                id : 514,
                title : 'My project Title',
                students : [
                    'Etienne RABIN',
                    'Clement BECHETOILLE',
                    'Thomas CULDAUT'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : '',
                githubLink : 'a'
            },
            {
                id : 515,
                title : 'My project Title',
                students : [
                    'Etienne RABIN',
                    'Clement BECHETOILLE',
                    'Thomas CULDAUT'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : '',
                githubLink : 'a'
            },
            {
                id : 516,
                title : 'My other project Title',
                students : [
                    'Julien RABIN',
                    'Maxime CORNIAU',
                    'Edouard METZ'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : 'a',
                githubLink : 'a'
            },
            {
                id : 517,
                title : 'A project of my own making',
                students : [
                    'Mathieu RABIN',
                    'samuel GILLES',
                    'justine DUBOIS',
                    'sebastien JOLLY'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : 'a',
                githubLink : 'a'
            },
            {
                id : 518,
                title : 'My other project Title',
                students : [
                    'Julien RABIN',
                    'Maxime CORNIAU',
                    'Edouard METZ'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : '',
                githubLink : 'a'
            },
            {
                id : 519,
                title : 'A project of my own making',
                students : [
                    'Mathieu RABIN',
                    'samuel GILLES',
                    'justine DUBOIS',
                    'sebastien JOLLY'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : 'a',
                githubLink : 'a'
            },
            {
                id : 5110,
                title : 'My project Title',
                students : [
                    'Etienne RABIN',
                    'Clement BECHETOILLE',
                    'Thomas CULDAUT'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : '',
                githubLink : 'a'
            },
            {
                id : 5111,
                title : 'A project of my own making',
                students : [
                    'Mathieu RABIN',
                    'samuel GILLES',
                    'justine DUBOIS',
                    'sebastien JOLLY'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : 'a',
                githubLink : 'a'
            },
            {
                id : 5112,
                title : 'My project Title',
                students : [
                    'Etienne RABIN',
                    'Clement BECHETOILLE',
                    'Thomas CULDAUT'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : 'a',
                githubLink : 'a'
            },
            {
                id : 5113,
                title : 'My project Title',
                students : [
                    'Etienne RABIN',
                    'Clement BECHETOILLE',
                    'Thomas CULDAUT'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : 'a',
                githubLink : 'a'
            }
        ]
    },
    {
        categorie : 'Septembre 2018',
        projects : [
            {
                id : 671,
                title : 'My project Title',
                students : [
                    'Etienne RABIN',
                    'Clement BECHETOILLE',
                    'Thomas CULDAUT'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : '',
                githubLink : 'a'
            },
            {
                id : 672,
                title : 'My other project Title',
                students : [
                    'Julien RABIN',
                    'Maxime CORNIAU',
                    'Edouard METZ'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : '',
                githubLink : 'a'
            },
            {
                id : 673,
                title : 'A project of my own making',
                students : [
                    'Mathieu RABIN',
                    'samuel GILLES',
                    'justine DUBOIS',
                    'sebastien JOLLY'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : 'a',
                githubLink : 'a'
            },
            {
                id : 674,
                title : 'My other project Title',
                students : [
                    'Julien RABIN',
                    'Maxime CORNIAU',
                    'Edouard METZ'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : 'a',
                githubLink : 'a'
            },
            {
                id : 675,
                title : 'A project of my own making',
                students : [
                    'Mathieu RABIN',
                    'samuel GILLES',
                    'justine DUBOIS',
                    'sebastien JOLLY'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : 'a',
                githubLink : 'a'
            },
            {
                id : 676,
                title : 'My project Title',
                students : [
                    'Etienne RABIN',
                    'Clement BECHETOILLE',
                    'Thomas CULDAUT'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : 'a',
                githubLink : 'a'
            },
            {
                id : 677,
                title : 'My project Title',
                students : [
                    'Etienne RABIN',
                    'Clement BECHETOILLE',
                    'Thomas CULDAUT'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : 'a',
                githubLink : 'a'
            },
            {
                id : 678,
                title : 'My other project Title',
                students : [
                    'Julien RABIN',
                    'Maxime CORNIAU',
                    'Edouard METZ'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : '',
                githubLink : 'a'
            },
            {
                id : 679,
                title : 'A project of my own making',
                students : [
                    'Mathieu RABIN',
                    'samuel GILLES',
                    'justine DUBOIS',
                    'sebastien JOLLY'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : 'a',
                githubLink : 'a'
            },
            {
                id : 6710,
                title : 'My other project Title',
                students : [
                    'Julien RABIN',
                    'Maxime CORNIAU',
                    'Edouard METZ'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : '',
                githubLink : 'a'
            },
            {
                id : 6711,
                title : 'A project of my own making',
                students : [
                    'Mathieu RABIN',
                    'samuel GILLES',
                    'justine DUBOIS',
                    'sebastien JOLLY'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : 'a',
                githubLink : 'a'
            },
            {
                id : 6712,
                title : 'My project Title',
                students : [
                    'Etienne RABIN',
                    'Clement BECHETOILLE',
                    'Thomas CULDAUT'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : 'a',
                githubLink : 'a'
            },
            {
                id : 6713,
                title : 'A project of my own making',
                students : [
                    'Mathieu RABIN',
                    'samuel GILLES',
                    'justine DUBOIS',
                    'sebastien JOLLY'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : '',
                githubLink : 'a'
            },
            {
                id : 6714,
                title : 'My project Title',
                students : [
                    'Etienne RABIN',
                    'Clement BECHETOILLE',
                    'Thomas CULDAUT'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : '',
                githubLink : 'a'
            },
            {
                id : 6715,
                title : 'My project Title',
                students : [
                    'Etienne RABIN',
                    'Clement BECHETOILLE',
                    'Thomas CULDAUT'
                ],
                description : 'little description to present my project, and for everybody to understand what we try to do when we develop this website.',
                websiteLink : '',
                githubLink : 'a'
            }
        ]
    }
]

const User = () => <ProjetcDisplay projectsRows={projectsRows}/>

export default User
import React from 'react'
import Session from './Session/Session'

const sessions = [
    {
        name : 'février 2019',
        language : 'JavaScript',
        periods : [
            { 
                name : 'Projet 1'
            },
            {
                
                name : 'Projet 2'
            },
            {

                name : 'Projet 3'
            }
        ],
        students : 23
    },
    {
        name : 'Septembre 2018',
        language : 'JavaScript',
        periods : [
            { 
                name : 'Projet 1'
            },
            {
                
                name : 'Hackathon'
            }
        ],
        students : 14
    },
]

const Admin = () => (
    <div>
        {sessions.map((session, index) => <Session key={index} {...session}/>)}
    </div>
)

export default Admin

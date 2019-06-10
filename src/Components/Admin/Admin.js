import React, { useEffect, useState } from 'react'
import Session from './Session/Session'
import axios from 'axios'

const campusId = 1;

const Admin = () => {
    const [sessions, setSessions] = useState([])

    useEffect(()=> {
        axios.get(`http://localhost:5000/session/campus=${campusId}`)
            .then(res => setSessions(res.data))
    }, [])

    return (
        <div>
            {sessions.map((session, index) => <Session key={index} {...session}/>)}
        </div>
    )
}

export default Admin

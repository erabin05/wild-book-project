import React, { useEffect, useState } from 'react'
import Session from './Session/Session'
import axios from 'axios'

import Header from '../Header/Header'

const campusId = 1;

const Admin = () => {
    const [sessions, setSessions] = useState([])

    const getAllSessions = () => {
        console.log('getAllSessions '+ localStorage.getItem('wildPortfolioToken'))
        axios.get(
            `${process.env.REACT_APP_URL_API}/session/campus=${campusId}`,
            {
                headers : { 
                    Authorization : `Bearer ${localStorage.getItem('wildPortfolioToken')}`
                }
            })
            .then(res => setSessions(res.data))
    }

    useEffect(()=> {
        getAllSessions()
    }, [])

    return (
        <div>
            <Header/>
            {sessions.map((session, index) => <Session key={index} {...session} getAllSessions={getAllSessions}/>)}
        </div>
    )
}

export default Admin

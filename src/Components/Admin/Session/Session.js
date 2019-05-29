import React from 'react'
import './_session.scss'

import WildProfilPic from '../../Pictos/wildProfilPic'

import Period from './Period/Period'

const Session = ({name, language, periods, students}) => (
    <section className='admin-session'>
        <div className='header'>
            <div>
                <div className='title'>
                    <div>
                        <h2>{name}</h2>
                        <h3>{language}</h3>
                    </div>
                    <figure></figure>
                </div>
                <div className='edit-buttons'>
                    <button className='outline-button-edit'>Edit Session</button>
                    <button className='outline-button'><div><WildProfilPic/></div>{students} Students</button>
                </div>
            </div>
            <button className='outline-button-edit'>Add projects period</button>
        </div>
        {periods.map((period, index)=><Period key={index} {...period}/>)}
    </section>
)

export default Session

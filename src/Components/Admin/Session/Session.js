import React from 'react'
import './_session.scss'

import WildProfilPic from '../../Pictos/wildProfilPic'

import Period from './Period/Period'
import Edit from '../../Pictos/Edit'
import Plus from '../../Pictos/Plus'

const Session = ({name, languages, periods, students}) => (
    <section className='admin-session'>
        <div className='header'>
            <div>
                <div className='title'>
                    <div>
                        <h2>{name}</h2>
                        <h3>{languages.reduce((acc, language)=>(`${acc} / ${language.name}`).substring(1), '')}</h3>
                    </div>
                    <figure></figure>
                </div>
                <div className='edit-buttons'>
                    <button className='outline-button-edit'><div><Edit/></div> Edit Session </button>
                    <button className='outline-button'><div><WildProfilPic/></div>{students} Students</button>
                </div>
            </div>
            <button className='outline-button-edit'><div><Plus/></div>Add projects period</button>
        </div>
        {periods.map((period, index)=><Period key={index} {...period}/>)}
    </section>
)

export default Session

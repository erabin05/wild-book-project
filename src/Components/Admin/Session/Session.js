import React, {useState} from 'react'
import './_session.scss'

import WildProfilPic from '../../Pictos/wildProfilPic'

import Period from './Period/Period'
import Edit from '../../Pictos/Edit'
import Plus from '../../Pictos/Plus'
import { Cross } from '../../Pictos/Cross'

const Session = ({name, languages, periods, students}) => {
    const [isEditSelected, setIsEditSelected] = useState(false)

    return (
    <section className='admin-session'>
        <div className='header'>
            <div>
                <div className='title'>
                    <div>
                        {
                            isEditSelected 
                            ?   <form>
                                    <input 
                                        type='date'
                                    />
                                </form>
                            :   <h2>{name}</h2>
                        }
                        {
                            isEditSelected 
                            ?   <p></p>
                            :   <h3>{languages.reduce((acc, language)=>(`${acc} / ${language.name}`).substring(1), '')}</h3>
                        }
                        
                    </div>
                    <figure></figure>
                </div>
                <div className='edit-buttons'>
                    <button 
                        className={`outline-button-edit ${isEditSelected && 'selected'}`}
                        onClick={()=> setIsEditSelected(preIsEditSelected => !preIsEditSelected)}
                    ><div><Edit/></div> Edit Session </button>
                    <button className='outline-button'><div><WildProfilPic/></div>{students} Students</button>
                </div>
            </div>
            <button className='outline-button-edit'><div><Plus/></div>Add projects period</button>
        </div>
        
        {
            periods[0].name !== null 
            ? periods.map((period, index)=><Period key={index} {...period} isEditSelected={isEditSelected}/> )
            : <p className='no-period'><div><Cross color='#F79797'/></div>No period for this session - Click on <span>Add Projects Period</span>to add one</p> 
        }
    </section>
)}

export default Session

import React, {useState, useRef} from 'react'
import './_session.scss'

import WildProfilPic from '../../Pictos/wildProfilPic'
import AddPeriod from './Period/AddPeriod'
import Period from './Period/Period'
import Edit from '../../Pictos/Edit'
import Plus from '../../Pictos/Plus'
import { Cross } from '../../Pictos/Cross'

import { Dropdown } from 'semantic-ui-react'

const months = ['01', '02','03','04','05','06','07','08','09','10','11','12']

const Session = ({
    id, 
    name, 
    languages, 
    periods, 
    students,
    getAllSessions
}) => {
    const [isEditSelected, setIsEditSelected] = useState(false)
    const [isAddPeriodSelected, setIsAddPeriodSelected] = useState(false)
    
    const [newPeriodName, setNewPeriodName] = useState('')

    const LanguagesTitle = languages.reduce((acc, language)=>(`${acc} / ${language.name}`).substring(1), '')
    const [languageName, setLanguageName] = useState(LanguagesTitle)

    return (
    <section className='admin-session'>
        <div className='header'>
            <div>
                <div className={`title`}>
                    {
                        !isEditSelected &&
                        <div>
                            <h2>{name}</h2>
                            <h3>{LanguagesTitle}</h3>
                        </div>
                    }
                    {!isEditSelected && <figure></figure>}
                    {
                        isEditSelected 
                        && (
                            <form className='edit-session-form'>
                                <label>Date</label>
                                <input 
                                    className='month' 
                                    placeholder='mm'
                                    maxlength="2"
                                />
                                <input 
                                    className='year' 
                                    placeholder='yyyy' 
                                    list="year"
                                    maxlength="4"
                                />
                                <label>Languages</label>
                                <input 
                                    className='language'
                                    placeholder='Language 1'
                                />
                                <input 
                                    className='language'
                                    placeholder='Language 2'
                                />
                            </form>
                        )
                    }
                </div>
                <div className='edit-buttons'>
                    <button 
                        className={`outline-button-edit ${isEditSelected && 'selected'}`}
                        onClick={()=> setIsEditSelected(preIsEditSelected => !preIsEditSelected)}
                    >
                        <div>
                            <Edit/>
                        </div>
                        Edit Session 
                    </button>
                    <button className='outline-button'><div><WildProfilPic/></div>{students} Students</button>
                </div>
            </div>
                <button 
                    className={`outline-button-edit ${isAddPeriodSelected && 'selected'}`}
                    onClick={()=> resetPeriodNameAndCloseCreationWindow(setIsAddPeriodSelected, setNewPeriodName)}
                >
                    <div>
                        <Plus/>
                    </div>
                    Add projects period
                </button>
        </div>
            <AddPeriod {
                ...{
                session_id : id,
                newPeriodName, 
                setNewPeriodName, 
                isAddPeriodSelected, 
                resetPeriodNameAndCloseCreationWindow, 
                setIsAddPeriodSelected,
                getAllSessions
                }
            }/>
        {
            periods[0].name !== null 
            ? periods.map((period, index)=><Period key={index} {...period} isEditSelected={isEditSelected} getAllSessions={getAllSessions}/> )
            : <div className='no-period'><div><Cross color='#F79797'/></div>No period for this session - Click on <span>Add Projects Period</span>to add one</div> 
        }
    </section>
)}

const resetPeriodNameAndCloseCreationWindow = (setIsAddPeriodSelected, setNewPeriodName) => {
    setIsAddPeriodSelected(preIsAddPeriodSelected => !preIsAddPeriodSelected)
    setNewPeriodName('')
}

export default Session

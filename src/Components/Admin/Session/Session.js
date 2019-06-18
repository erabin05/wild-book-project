import React, {useState, useRef} from 'react'
import './_session.scss'

import WildProfilPic from '../../Pictos/wildProfilPic'
import AddPeriod from './Period/AddPeriod'
import Period from './Period/Period'
import Edit from '../../Pictos/Edit'
import Plus from '../../Pictos/Plus'
import { Cross } from '../../Pictos/Cross'

import { Dropdown } from 'semantic-ui-react'

const dropDownMonth = ['January', 'February', 'March', 'April', 'May'].map((month, index) => ({key: month, text : month, value : month}))

const Session = ({id, name, languages, periods, students}) => {
    const [isEditSelected, setIsEditSelected] = useState(false)
    const [isAddPeriodSelected, setIsAddPeriodSelected] = useState(false)
    
    const [newPeriodName, setNewPeriodName] = useState('')

    return (
    <section className='admin-session'>
        <div className='header'>
            <div>
                <div className={`title`}>
                    {
                        !isEditSelected &&
                        <div>
                            <h2>{name}</h2>
                            <h3>{languages.reduce((acc, language)=>(`${acc} / ${language.name}`).substring(1), '')}</h3>
                        </div>
                    }
                    {!isEditSelected && <figure></figure>}
                    {
                        isEditSelected &&
                        <Dropdown placeholder='Skills' fluid multiple selection options={dropDownMonth} />
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
                setIsAddPeriodSelected
                }
            }/>
        {
            periods[0].name !== null 
            ? periods.map((period, index)=><Period key={index} {...period} isEditSelected={isEditSelected}/> )
            : <div className='no-period'><div><Cross color='#F79797'/></div>No period for this session - Click on <span>Add Projects Period</span>to add one</div> 
        }
    </section>
)}

const resetPeriodNameAndCloseCreationWindow = (setIsAddPeriodSelected, setNewPeriodName) => {
    setIsAddPeriodSelected(preIsAddPeriodSelected => !preIsAddPeriodSelected)
    setNewPeriodName('')
}

export default Session

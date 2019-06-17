import React, {useState, useRef} from 'react'
import './_session.scss'

import WildProfilPic from '../../Pictos/wildProfilPic'
import Period from './Period/Period'
import Edit from '../../Pictos/Edit'
import Plus from '../../Pictos/Plus'
import { Cross } from '../../Pictos/Cross'
import Selected from '../../Pictos/Selected'

import { Dropdown } from 'semantic-ui-react'

const dropDownMonth = ['January', 'February', 'March', 'April', 'May'].map((month, index) => ({key: month, text : month, value : month}))

const Session = ({name, languages, periods, students}) => {
    const [isEditSelected, setIsEditSelected] = useState(false)
    const [isAddPeriodSelected, setIsAddPeriodSelected] = useState(false)
    
    const [newPeriodName, setNewPeriodName] = useState('')

    const addPeriod = useRef({});

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
            <div 
                className='add-period-container'
                style={{height : isAddPeriodSelected ? `${addPeriod.current.offsetHeight + 1}px` : '0px'}}
            >
                <div 
                    className='add-period'
                    style={{marginTop : isAddPeriodSelected ? '0px' : `-${addPeriod.current.offsetHeight}px`}}
                    ref={addPeriod}
                >
                    <div className='input'>
                        <label>Period name</label>
                        <input 
                            placeholder='Project, Hackathon, ...'
                            value={newPeriodName}
                            onChange={(e)=> setNewPeriodName(e.target.value)}
                        />
                    </div>
                    <div className='buttons'>
                        <button className={`outline-button ${newPeriodName.length < 1 && 'button-lock'}`}>
                            <div>
                                <Selected color={'#39424e'}/>
                            </div>
                            Valider
                        </button>
                        <button 
                            className='outline-button'
                            onClick={()=>{
                                resetPeriodNameAndCloseCreationWindow(setIsAddPeriodSelected, setNewPeriodName)
                            }}
                        >
                            <div className='cross'>
                                <Cross color={'#39424e'}/>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
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

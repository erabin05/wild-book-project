import React, {useRef} from 'react'

import axios from 'axios'

import { Cross } from '../../../Pictos/Cross'
import Selected from '../../../Pictos/Selected'

const AddPeriod = ({
    session_id,
    newPeriodName, 
    setNewPeriodName, 
    isAddPeriodSelected, 
    resetPeriodNameAndCloseCreationWindow, 
    setIsAddPeriodSelected,
    getAllSessions
}) => {

    const addPeriod = useRef({});    

    return (
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
                <button 
                    className={`outline-button ${newPeriodName.length < 1 && 'button-lock'}`}
                    onClick={()=>{
                        axios.post(`${process.env.REACT_APP_URL_API}/period`, {name : newPeriodName, session_id })
                            .then(()=>{
                                resetPeriodNameAndCloseCreationWindow(setIsAddPeriodSelected, setNewPeriodName)
                                getAllSessions()
                            })
                    }}
                >
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
    )
}

export default AddPeriod
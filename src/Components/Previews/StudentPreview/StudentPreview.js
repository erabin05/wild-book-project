import React, { useState } from 'react'
import './_student-preview.scss'
import wildProfilPic from './wildProfilPic'

const StudentPreview = ({name, github, linkedin}) => {
    const [isMouseOver, setIsMouseOver] = useState(false)    
    return (
        <div className='student-preview' onMouseEnter={()=>setIsMouseOver(true)} onMouseLeave={()=>setIsMouseOver(false)}>
        
            <span>{wildProfilPic()}</span>
            {isMouseOver
                ?<div className='links'>
                    <a href={github} rel='noreferrer noopener' target='_blank'>Github</a>
                    <a href={linkedin} rel='noreferrer noopener' target='_blank'>Linkedin</a>
                </div>
                :<p>{name}</p>
            }
        </div>
    )
}

export default StudentPreview

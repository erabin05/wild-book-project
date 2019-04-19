import React from 'react'
import './_student-preview.scss'
import wildProfilPic from './wildProfilPic'

const StudentPreview = ({name}) => (
    <a className='student-preview'>
        <span>{wildProfilPic()}</span>
        {name}
    </a>
)

export default StudentPreview
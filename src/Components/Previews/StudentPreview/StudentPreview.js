import React from 'react'
import './_student-preview.scss'

const StudentPreview = ({name}) => (
    <a className='student-preview'>
        <span></span>
        {name}
    </a>
)

export default StudentPreview
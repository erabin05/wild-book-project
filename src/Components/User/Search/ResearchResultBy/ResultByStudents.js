import React from 'react'

import StudentPreview from '../../../Previews/StudentPreview/StudentPreview'

const ResultByStudents = (searchResults) => (
    <div className='container-result-by-student'>
        {searchResults.map(((searchResult, i) => 
            <div key={i}>
                <StudentPreview {...searchResult}/>
            </div>
        ))}
    </div>
)

export default ResultByStudents

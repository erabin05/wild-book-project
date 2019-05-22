import React from 'react'

const ResultByLanguages = (searchResults) => (
    <div className='result-by-container'>
        {searchResults.map((searchResult, i ) => (
            <p 
                key={i}
                className='result-by'
            >
                {searchResult.name}
            </p>
        ))}
    </div>
)

export default ResultByLanguages

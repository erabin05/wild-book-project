import React from 'react'

import { Link } from 'react-router-dom'

import Language from '../../../Pictos/Language'

const ResultByLanguages = (searchResults) => (
    <div className='result-by-container'>
        {searchResults.map((searchResult, i ) => (
            <Link key={i} to={`${searchResult.name}_language_${searchResult.id}`.replace(/ /g,"-")}>
                <div className='result-by'>
                    <div className='result-by-picto-language'><Language/></div>
                    <p>{searchResult.name}</p>
                </div>
            </Link>
        ))}
    </div>
)

export default ResultByLanguages

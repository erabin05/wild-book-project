import React from 'react'

import { Link } from 'react-router-dom'

import Here from '../../../Pictos/Here'

const ResultByCampuses = searchResults => (
    <div className='result-by-container'>
        {searchResults.map((searchResult, i) => (
            <Link key={i} to={`${searchResult.name}_campus_${searchResult.id}`.replace(/ /g,"-")}>
                <div className='result-by'>
                    <span className='result-by-picto'><Here/></span>
                    <p>{searchResult.name}</p>
                </div>
            </Link>
        ))}
    </div>
)

export default ResultByCampuses

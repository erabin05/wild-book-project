import React from 'react'

const Here = ({color}) => (
    <svg 
        className='here'
        x="0px" 
        y="0px"
        width="100%" 
        height="100%" 
        viewBox="0 0 100 100"
    >
        <path 
            fill="none"
            strokeWidth="3" 
            strokeLinejoin="round" 
            strokeMiterlimit="10" 
            d="M81.062,38.766c0,9.734-3.062,27.734-31.047,51.37C22,66.5,18.968,48.5,18.968,38.766c0-17.147,13.9-31.047,31.047-31.047S81.062,21.619,81.062,38.766z"
        />
        <circle 
            fill="none" 
            stroke={color}
            strokeWidth="3" 
            strokeLinejoin="round" 
            strokeMiterlimit="10" 
            cx="50" 
            cy="38.849" 
            r="17.31"
        />
    </svg>
)

export default Here

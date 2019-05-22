import React from 'react'

export const Cross = ({color}) => (
    <svg 
        x="0px" 
        y="0px" 
        width="100%" 
        height="100%" 
        viewBox="0 0 100 100" 
        enableBackground="new 0 0 100 100"
    >
        <line 
            fill="none" 
            stroke={color} 
            strokeWidth="6" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeMiterlimit="10" 
            x1="5.5" 
            y1="5.5" 
            x2="94.5" 
            y2="94.5"
        />
        <line 
            fill="none" 
            stroke={color} 
            strokeWidth="6" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeMiterlimit="10" 
            x1="94.5" 
            y1="5.5" 
            x2="5.5" 
            y2="94.5"
        />
    </svg>
)


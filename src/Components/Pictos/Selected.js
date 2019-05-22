import React from 'react'

const Selected = ({color}) => (
    <svg 
        x="0px" 
        y="0px"
        width="150%" 
        height="150%" 
        viewBox="0 0 100 72.667" 
        enableBackground="new 0 0 100 72.667"
    >
        <polyline 
            fill="none" 
            stroke={color}
            strokeWidth="6.0336" 
            strokeLinecap="round" 
            strokeMiterlimit="10" 
            points="5.213,29.567 39.139,66.667 95.213,5.333 "
        />
    </svg>
)

export default Selected

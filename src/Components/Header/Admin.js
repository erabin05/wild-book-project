import React from 'react'

import { Link } from 'react-router-dom'

const HeaderAdmin = () => (
    <div>
        <p className='name'>Prénom Nom</p>
        <p className='city'>Ville</p>
        <Link to='/login'>
        <button 
            className='inline-button'
            onClick={()=> {
                localStorage.removeItem('wildPortfolioToken');
            }}
        >Log out</button>
        </Link>
    </div>
)

export default HeaderAdmin

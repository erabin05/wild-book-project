import React from 'react'

const HeaderAdmin = () => (
    <div>
        <p className='name'>Prénom Nom</p>
        <p className='city'>Ville</p>
        <button 
            className='inline-button'
            onClick={()=> {
                localStorage.removeItem('wildPortfolioToken');
            }}
        >Log out</button>
    </div>
)

export default HeaderAdmin

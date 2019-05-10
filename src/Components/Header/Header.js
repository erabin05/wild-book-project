import React from 'react'
import './_header.scss'

import { Link } from 'react-router-dom'
import { connect } from "react-redux";

import { setSearchBarIsFocus } from '../../Reducers/searchBarIsFocus/action'

const mapStateToProps = state => ({
    screenSize: state.screenSize
});

const mapDispatchToProps = dispatch => ({
    setSearchBarIsFocus: isFocus => dispatch( setSearchBarIsFocus(isFocus) ),
})

const Header = ({screenSize, setSearchBarIsFocus}) => (
    <header>
        <Link to='/'>
            <figure onClick={()=>setSearchBarIsFocus(false)}>
                <img src={require('./wild-logo.png')} alt='wild code school identity'/>
            </figure>
        </Link>
        {screenSize !== 'phone' &&  
        <a  className='outline-button'
            href='https://wildcodeschool.fr/'
            rel='noreferrer noopener'
            target='_blank'
        >About Wild Code School</a>}
    </header>
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Header)

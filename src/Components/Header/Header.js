import React from 'react'
import './_header.scss'

import { Link, Route } from 'react-router-dom'
import { connect } from "react-redux"

import HeaderUser from './User'
import HeaderAdmin from './Admin'

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
                <img 
                    src={require('./wild-logo.png')} 
                    alt='wild code school identity'
                />
            </figure>
        </Link>
        <Route exact path='/' component={HeaderUser}/>
        <Route exact path='/Admin' component={HeaderAdmin}/>
    </header>
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Header)

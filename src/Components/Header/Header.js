import React from 'react'
import './_header.scss'

import { Link } from 'react-router-dom'
import { connect } from "react-redux";

const Header = ({screenSize}) => (
    <header>
        <Link to='/'>
            <figure><img src={require('./wild-logo.png')} alt='wild code school identity'/></figure>
        </Link>
        {screenSize !== 'phone' &&  
        <a  className='outline-button'
            href='https://wildcodeschool.fr/'
            rel='noreferrer noopener'
            target='_blank'
        >About Wild Code School</a>}
    </header>
)

const mapStateToProps = state => ({
    screenSize: state.screenSize
  });

export default connect(
    mapStateToProps
    )(Header)

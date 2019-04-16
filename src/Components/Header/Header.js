import React from 'react'
import { connect } from "react-redux";
import './_header.scss'

const Header = ({screenSize}) => (
    <header>
        <figure><img src={require('./wild-logo.png')} alt='wild code school identity'/></figure>
        {screenSize !== 'phone' &&  <a  className='outline-button'
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
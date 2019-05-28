import React from 'react'

import { connect } from 'react-redux'

const mapStateToProps = state => ({
    screenSize: state.screenSize
});

const HeaderUser = ({screenSize}) => screenSize !== 'phone' &&  (
        <a  className='outline-button'
            href='https://wildcodeschool.fr/'
            rel='noreferrer noopener'
            target='_blank'
        >About Wild Code School</a>
)

export default connect(
    mapStateToProps
    )(HeaderUser)

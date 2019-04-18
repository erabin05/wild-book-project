import { combineReducers } from 'redux'

import screenSize from './screenSize/reducer'
import projectSelectedForFocus from './projectSelectedForFocus/reducer'

export default combineReducers ({
    screenSize,
    projectSelectedForFocus

});
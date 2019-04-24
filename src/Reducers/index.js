import { combineReducers } from 'redux'

import screenSize from './screenSize/reducer'
import projectSelectedForFocus from './projectSelectedForFocus/reducer'
import rowIdOfSelectedProject from './rowIdOfProjectSelected/reducer'

export default combineReducers ({
    screenSize,
    projectSelectedForFocus,
    rowIdOfSelectedProject

});

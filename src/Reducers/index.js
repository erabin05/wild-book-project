import { combineReducers } from 'redux'

import screenSize from './screenSize/reducer'
import dedicatedCategorie from './dedicatedCategorie/reducer'
import innerRowIdOfProjectSelected from './innerRowIdOfProjectSelected/reducer'
import projectSelectedForFocus from './projectSelectedForFocus/reducer'
import rowIdOfSelectedProject from './rowIdOfProjectSelected/reducer'

export default combineReducers ({
    screenSize,
    dedicatedCategorie,
    innerRowIdOfProjectSelected,
    projectSelectedForFocus,
    rowIdOfSelectedProject
});

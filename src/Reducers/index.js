import { combineReducers } from 'redux'

import screenSize from './screenSize/reducer'
import innerRowIdOfProjectSelected from './innerRowIdOfProjectSelected/reducer'
import projectSelectedForFocus from './projectSelectedForFocus/reducer'
import rowIdOfSelectedProject from './rowIdOfProjectSelected/reducer'
import searchBarIsFocus from './searchBarIsFocus/reducer'
import searchCategorieList from './searchCategorieList/reducer'
import searchProjectsList from './searchProjectsList/reducer'
import searchCampusesList from './searchCampusesList/reducer'
import searchLanguagesList from './searchLanguagesList/reducer'
import searchStudentsList from './searchStudentsList/reducer'

export default combineReducers ({
    screenSize,
    innerRowIdOfProjectSelected,
    projectSelectedForFocus,
    rowIdOfSelectedProject,
    searchBarIsFocus,
    searchCategorieList,
    searchProjectsList,
    searchCampusesList,
    searchLanguagesList,
    searchStudentsList
});

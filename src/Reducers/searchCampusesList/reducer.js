import {NEW_SEARCH_CAMPUS_LIST} from './action'

const initialState = []

const searchCampusesList = (state = initialState, action) => {
    if ( action.type === NEW_SEARCH_CAMPUS_LIST ) {
        return action.campuses
    } else {
        return state
    }
}

export default searchCampusesList

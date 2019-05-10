import {NEW_SEARCH_PROJECT_LIST} from './action'

const initialState = []

const searchProjectsList = (state = initialState, action) => {
    if ( action.type === NEW_SEARCH_PROJECT_LIST ) {
        return action.projects
    } else {
        return state
    }
}

export default searchProjectsList

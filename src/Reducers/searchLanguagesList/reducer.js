import {NEW_SEARCH_LANGUAGES_LIST} from './action'

const initialState = []

const searchLanguagesList = (state = initialState, action) => {
    if ( action.type === NEW_SEARCH_LANGUAGES_LIST ) {
        return action.languages
    } else {
        return state
    }
}

export default searchLanguagesList

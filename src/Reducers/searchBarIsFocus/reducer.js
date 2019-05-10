import {SEARCH_BAR_IS_FOCUS} from './action'

const initialState = false

const searchBarIsFocus = (state = initialState, action) => {
    if ( action.type === SEARCH_BAR_IS_FOCUS ) {
        return action.isFocus
    } else {
        return state
    }
}

export default searchBarIsFocus

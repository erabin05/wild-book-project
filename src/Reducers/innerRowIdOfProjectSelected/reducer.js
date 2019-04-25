import {NEW_INNER_ROW_ID} from './action'

const initialState = 0

const innerRowIdOfProjectSelected = (state = initialState, action) => {
    if ( action.type === NEW_INNER_ROW_ID ) {
        return action.innerRowId
    } else {
        return state
    }
}

export default innerRowIdOfProjectSelected

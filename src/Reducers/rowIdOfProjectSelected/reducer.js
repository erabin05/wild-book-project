import {NEW_ROW_ID} from './action'

const initialState = 0

const rowIdOfSelectedProject = (state = initialState, action) => {
    if ( action.type === NEW_ROW_ID ) {
        return action.rowId
    } else {
        return state
    }
}

export default rowIdOfSelectedProject

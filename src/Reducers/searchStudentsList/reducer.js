import {NEW_SEARCH_STUDENT_LIST} from './action'

const initialState = []

const searchStudentsList = (state = initialState, action) => {
    if ( action.type === NEW_SEARCH_STUDENT_LIST ) {
        return action.students
    } else {
        return state
    }
}

export default searchStudentsList

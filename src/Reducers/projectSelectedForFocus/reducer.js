import {SELECT_NEW_PROJECT} from './action'

const initialState = {
    title : 'title',
    description : 'description',
    students : ['john doe', 'john doe', 'john doe']
}

const projectSelectedForFocus = (state = initialState, action) => {
    if ( action.type === SELECT_NEW_PROJECT ) {
        return action.project
    } else {
        return state
    }
}

export default projectSelectedForFocus

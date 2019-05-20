import {SEARCH_CATEGORIE_LIST} from './action'

const initialState = [
    {
        name : 'project',
        isSelected : true
    },
    {
        name : 'campus',
        isSelected : true
    },
    {
        name : 'student',
        isSelected : true
    },
    {
        name : 'language',
        isSelected : true
    },
]



const searchCategorieList = (state = initialState, action) => {
    if ( action.type === SEARCH_CATEGORIE_LIST ) {
        return action.categorieList 
    } else {
        return state
    }
}

export default searchCategorieList

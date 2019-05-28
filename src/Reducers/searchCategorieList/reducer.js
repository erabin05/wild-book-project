import {SEARCH_CATEGORIE_LIST} from './action'
import {SEARCH_CATEGORIE_LIST_RESULTS} from './action'

const initialState = [
    {
        name : 'project',
        isSelected : true,
        isThereResults : false
    },
    {
        name : 'campus',
        isSelected : false,
        isThereResults : false
    },
    {
        name : 'student',
        isSelected : false,
        isThereResults : false
    },
    {
        name : 'language',
        isSelected : false,
        isThereResults : false
    },
]



const searchCategorieList = (state = initialState, action) => {
    if ( action.type === SEARCH_CATEGORIE_LIST ) {
        let result = []
        state.map(categorie => {
            result = [
                ...result, action.categorieName === categorie.name 
                ? {name : categorie.name, isSelected : !categorie.isSelected, isThereResults : categorie.isThereResults}
                : categorie
            ]
        })
        return result
    } else if (action.type === SEARCH_CATEGORIE_LIST_RESULTS) {
        let result = []
        state.map(categorie => {
            result = [
                ...result, action.categorieName === categorie.name 
                ? {name : categorie.name, isSelected : categorie.isSelected, isThereResults : action.isThereResults}
                : categorie
            ]
        })
        return result
    } else {
        return state
    }
}

export default searchCategorieList

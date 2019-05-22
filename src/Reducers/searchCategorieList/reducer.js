import {SEARCH_CATEGORIE_LIST} from './action'
import {SEARCH_CATEGORIE_LIST_RESULTS} from './action'

const initialState = [
    {
        name : 'projects',
        isSelected : true,
        isThereResults : false
    },
    {
        name : 'campuses',
        isSelected : true,
        isThereResults : false
    },
    {
        name : 'students',
        isSelected : true,
        isThereResults : false
    },
    {
        name : 'languages',
        isSelected : true,
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

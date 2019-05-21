import {SEARCH_CATEGORIE_LIST} from './action'

const initialState = [
    {
        name : 'projects',
        isSelected : true
    },
    {
        name : 'campuses',
        isSelected : true
    },
    {
        name : 'students',
        isSelected : true
    },
    {
        name : 'languages',
        isSelected : true
    },
]



const searchCategorieList = (state = initialState, action) => {
    if ( action.type === SEARCH_CATEGORIE_LIST ) {
        let result = []
        state.map(categorie => {
            result = [
                ...result, action.categorieName === categorie.name 
                ? {name : categorie.name, isSelected : !categorie.isSelected}
                : categorie
            ]
        })
        return result
    } else {
        return state
    }
}

export default searchCategorieList

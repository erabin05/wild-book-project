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

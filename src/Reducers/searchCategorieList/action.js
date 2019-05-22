export const SEARCH_CATEGORIE_LIST = 'SEARCH_CATEGORIE_LIST'
export const SEARCH_CATEGORIE_LIST_RESULTS = 'SEARCH_CATEGORIE_LIST_RESULTS'

export const setSearchCategorieList = categorieName => ({
    type : SEARCH_CATEGORIE_LIST,
    categorieName
})

export const setSearchCategorieListResults = (categorieName, isThereResults) => ({
    type : SEARCH_CATEGORIE_LIST_RESULTS,
    categorieName,
    isThereResults
})

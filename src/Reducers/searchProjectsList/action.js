export const NEW_SEARCH_PROJECT_LIST = 'NEW_SEARCH_PROJECT_LIST'

export const setSearchProjectsList = data => ({
    type : NEW_SEARCH_PROJECT_LIST,
    projects : data.projects
})

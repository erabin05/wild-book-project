import React from 'react'

import { connect } from "react-redux";

import StudentPreview from '../Previews/StudentPreview/StudentPreview'
import ListOfProjects from './ListOfProjects'

const mapStateToProps = state => ({
    searchProjectsList : state.searchProjectsList,
    searchCampusesList : state.searchCampusesList,
    searchStudentsList : state.searchStudentsList,
    searchLanguagesList : state.searchLanguagesList,
    searchCategories : state.searchCategorieList
  });

  
const ResearchResult = ({
    searchProjectsList,
    searchCampusesList,
    searchStudentsList,
    searchLanguagesList,
    searchCategories
}) => {

    const categoriesDisplay = [ 
        {
            resultBy : ResultByProjects,
            searchResults : searchProjectsList
        },
        {
            resultBy : ResultByCampuses,
            searchResults : searchCampusesList
        }, 
        {
            resultBy : ResultByStudents,
            searchResults : searchStudentsList
        }, 
        {
            resultBy : ResultByLanguages,
            searchResults : searchLanguagesList
        }
    ]

    return (
        <div className='research-result'>
            {searchCategories
                .map((searchCategorie, index) => (
                    {...searchCategorie, 
                        resultBy : categoriesDisplay[index].resultBy, 
                        searchResults : categoriesDisplay[index].searchResults
                }))
                .filter(({isSelected}) => isSelected)
                .map(({name, resultBy, searchResults}, index)=>{
                    return searchResults.length > 0 && (
                    <ResultBy 
                        key={index}
                        categorie={name} 
                        ListOfCategorie={resultBy} 
                        searchResults={searchResults} 
                        errorMsg="We can't find the project you are looking for, sorry :/"
                    />
                )})
            }
        </div>
    )
}

const ResultBy = ({categorie, ListOfCategorie, searchResults, errorMsg}) => (
    <div>
        <div className='research-head'>
            <h2>{categorie}</h2>
        </div>
        {ListOfCategorie(searchResults)}
    </div>
)

const ResultByProjects = (searchResults) => <ListOfProjects projects={searchResults}/>

const ResultByCampuses = (searchResults) => (<div></div>)

const ResultByStudents = (searchResults) => (
    <div className='search-by-name'>
        {searchResults.map(((searchResult, i) => <div><StudentPreview key={i} {...searchResult}/></div>))}
    </div>
)

const ResultByLanguages = (searchResults) => (<div></div>)

export default connect(
    mapStateToProps
)(ResearchResult)

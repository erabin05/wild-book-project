import React from 'react'

import { connect } from "react-redux";

import ListOfProjects from './ListOfProjects'

const mapStateToProps = state => ({
    searchProjectsList : state.searchProjectsList,
    searchCategories : state.searchCategorieList
  });

const ResearchResult = ({searchProjectsList, searchCategories}) => {
    console.log(searchCategories)
    return (
        <div className='research-result'>
            {searchCategories
                .map(({name, isSelected}, index)=>(
                    <ResultBy 
                        key={index}
                        categorie={name} 
                        ListOfCategorie={ResultByProjects} 
                        searchList={searchProjectsList} 
                        errorMsg="We can't find the project you are looking for, sorry :/"
                    />
                ))
                .filter(Categorie => !Categorie.isSelected)
            }


            {/* <ResultBy 
                categorie='Project' 
                ListOfCategorie={ResultByProjects} 
                searchList={searchProjectsList} 
                errorMsg="We can't find the project you are looking for, sorry :/"
            />
            <ResultBy 
                categorie='Campus' 
                ListOfCategorie={ResultByCampus} 
                searchList={searchProjectsList} 
                errorMsg="We can't find the project you are looking for, sorry :/"
            />
            <ResultBy 
                categorie='Student' 
                ListOfCategorie={ResultByStudent} 
                searchList={searchProjectsList} 
                errorMsg="We can't find the project you are looking for, sorry :/"
            />
            <ResultBy categorie='Language' 
                ListOfCategorie={ResultByLanguage} 
                searchList={searchProjectsList} 
                errorMsg="We can't find the project you are looking for, sorry :/"
            /> */}
        </div>
    )
}

const ResultBy = ({categorie, ListOfCategorie, searchList, errorMsg}) => (
    <div>
        <div className='research-head'>
            <h2>{categorie}</h2>
        </div>
        {searchList.length > 0
            ? ListOfCategorie(searchList)
            : <p className='not-found'>{errorMsg}</p>
        }
    </div>
)

const ResultByProjects = (searchList) => <ListOfProjects projects={searchList}/>

const ResultByCampus = (searchList) => (<div></div>)

const ResultByStudent = (searchList) => (<div></div>)

const ResultByLanguage = (searchList) => (<div></div>)

export default connect(
    mapStateToProps
)(ResearchResult)

import React, { useState } from 'react'

import { connect } from 'react-redux';
import axios from 'axios'

import { setSearchBarIsFocus } from '../../../Reducers/searchBarIsFocus/action'
import { setSearchCategorieList } from '../../../Reducers/searchCategorieList/action'
import { setSearchProjectsList } from '../../../Reducers/searchProjectsList/action'
import { setSearchCampusesList } from '../../../Reducers/searchCampusesList/action'
import { setSearchLanguagesList } from '../../../Reducers/searchLanguagesList/action'
import { setSearchStudentsList } from '../../../Reducers/searchStudentsList/action'
import { setSearchCategorieListResults } from '../../../Reducers/searchCategorieList/action'

import { Cross } from '../../Pictos/Cross'
import Selected from '../../Pictos/Selected'

const mapStateToProps = state => ({
    searchBarIsFocus : state.searchBarIsFocus,
    searchCategorieList : state.searchCategorieList
})

const mapDispatchToProps = dispatch => ({
    setSearchBarIsFocus: isFocus => dispatch( setSearchBarIsFocus(isFocus) ),
    setSearchProjectsList: projects => dispatch( setSearchProjectsList(projects) ),
    setSearchCampusesList: projects => dispatch( setSearchCampusesList(projects) ),
    setSearchLanguagesList: projects => dispatch( setSearchLanguagesList(projects) ),
    setSearchStudentsList: projects => dispatch( setSearchStudentsList(projects) ),
    setSearchCategorieList: categories => dispatch( setSearchCategorieList(categories) ),
    setSearchCategorieListResults : (categorieName, isThereResults) => dispatch( setSearchCategorieListResults(categorieName, isThereResults) )
});


const SearchBar = ({
    searchBarIsFocus, 
    searchCategorieList, 
    setSearchCategorieList, 
    setSearchBarIsFocus, 
    setSearchProjectsList,
    setSearchCampusesList,
    setSearchLanguagesList,
    setSearchStudentsList,
    setSearchCategorieListResults
}) => {

    const [research, setResearch] = useState('')
    const setSearchCategories = [setSearchProjectsList, setSearchCampusesList, setSearchStudentsList, setSearchLanguagesList]

    const researchBarOnChange = (e) => {
        setResearch(e.target.value)
        e.target.value && 

        searchCategorieList.map((categorie, i) => {
            axios.get(`http://localhost:5000/${categorie.name}/search=${e.target.value}`)
                .then(res => {
                    const setSearchCategorie = setSearchCategories[i]
                    setSearchCategorie(res.data)
                    setSearchCategorieListResults(categorie.name, res.data.length > 0 || (res.data.projects && res.data.projects.length > 0))
                })   
        })
    }  

    return (
        <section className='search-bar'>
            <div className='bar'>
                <input 
                    type="text" 
                    value={research} 
                    onChange={researchBarOnChange} 
                    onFocus={()=>setSearchBarIsFocus(true)}
                    placeholder="search"
                />
                {searchBarIsFocus && 
                <div 
                    className='exit-cross' 
                    onClick={()=>{
                        setResearch("")
                        setSearchBarIsFocus(false)
                    }}
                >
                    <Cross color={'#fff'}/>
                </div>
                }
            </div>
            { searchBarIsFocus &&
            <div className='search-bar-buttons'>
                <p>Result by</p>
                <div>{searchCategorieList.map((categorie, i) => {
                    return (
                    <button 
                        key={i}
                        className={`
                            ${categorie.isSelected ? 'button-selected' : 'button-unselected'}
                            ${!categorie.isThereResults && ' no-result-for-categorie'}
                        `}
                        onClick={()=>setSearchCategorieList(categorie.name)}
                    >
                        {categorie.name}
                        <div>
                            {categorie.isSelected
                            ? <Selected color={'#fff'}/>
                            : <Cross color={'#000'}/>
                            }
                        </div>
                    </button>
                    )
                })}</div>
            </div>
            }
        </section>
    )
}

export default 
connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar)

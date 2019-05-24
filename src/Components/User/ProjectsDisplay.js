import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";

import ResearchResult from './Search/ResearchResult'
import SearchBar from './Search/SearchBar'
import RowsProjects from '../Previews/RowsProjects/RowsProjects'

const mapStateToProps = state => ({
    isSearchBarFocus : state.searchBarIsFocus,
  });

const ProjectDisplay = ({isSearchBarFocus}) => {

        const rowsCategories = ([
            {
                categorie : 'campus',
                searchParam : 'random'
            },
            {
                categorie : 'language',
                searchParam : 'random'
            }
        ])

    return (
        <section className='project-display'>
            <SearchBar/>
            { isSearchBarFocus
            ? <ResearchResult/>
            :<div>{rowsCategories.map((categorie, id) => <RowsProjects key={id} rowId={id} {...categorie}/>)}</div>
            }
        </section>
    )
}

export default connect(
    mapStateToProps
)(ProjectDisplay)

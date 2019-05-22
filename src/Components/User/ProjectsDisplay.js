import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";

import ResearchResult from './Search/ResearchResult'
import SearchBar from './Search/SearchBar'
import RowsProjects from '../Previews/RowsProjects/RowsProjects'

const mapStateToProps = state => ({
    isSearchBarFocus : state.searchBarIsFocus,
  });

const ProjectDisplay = ({isSearchBarFocus}) => {
    const [projectsRows, setProjectRows] = useState([])

    useEffect(()=> {
        setProjectRows([
            {
                categorie : 'campus',
                idInCategorie : 1
            },
            {
                categorie : 'language',
                idInCategorie : 4
            },
            {
                categorie : 'session',
                idInCategorie : 1
            }
        ])
    })

    return (
        <section className='project-display'>
            <SearchBar/>
            { isSearchBarFocus
            ? <ResearchResult/>
            :<div>{projectsRows.map((categorie, id) => <RowsProjects key={id} rowId={id} {...categorie}/>)}</div>
            }
        </section>
    )
}

export default connect(
    mapStateToProps
)(ProjectDisplay)

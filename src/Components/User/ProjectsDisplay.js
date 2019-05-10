import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";

import SearchBar from './SearchBar'
import ListOfProjects from './ListOfProjects'
import RowsProjects from '../Previews/RowsProjects/RowsProjects'

const mapStateToProps = state => ({
    isSearchBarFocus : state.searchBarIsFocus,
    searchProjectsList : state.searchProjectsList

  });

const ProjectDisplay = ({isSearchBarFocus, searchProjectsList}) => {
    const [projectsRows, setProjectRows] = useState([])
    const[isResearchFocus, setIsResearchFocus] = useState(false)

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
            ? <ListOfProjects projects={searchProjectsList}/>
            :<div>{projectsRows.map((categorie, id) => <RowsProjects key={id} rowId={id} {...categorie}/>)}</div>
            }
        </section>
    )
}

export default connect(
    mapStateToProps
)(ProjectDisplay)

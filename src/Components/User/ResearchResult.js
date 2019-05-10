import React from 'react'

import { connect } from "react-redux";

import ListOfProjects from './ListOfProjects'

const mapStateToProps = state => ({
    searchProjectsList : state.searchProjectsList
  });

const ResearchResult = ({searchProjectsList}) => {
    return (
        <div>
            <div className='research-head'>
                <h2>Projects</h2>
            </div>
            {searchProjectsList.length > 0
            ?   <ListOfProjects projects={searchProjectsList}/>
            : <p>no results found</p>
            }
        </div>
    )
}

export default connect(
    mapStateToProps
)(ResearchResult)

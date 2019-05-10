import React from 'react'

import { connect } from "react-redux";

import ListOfProjects from './ListOfProjects'

const mapStateToProps = state => ({
    searchProjectsList : state.searchProjectsList
  });

const ResearchResult = ({searchProjectsList}) => {
    return (
        <div className='research-result'>
            <div className='research-head'>
                <h2>Results by projects</h2>
            </div>
            {searchProjectsList.length > 0
            ?   <ListOfProjects projects={searchProjectsList}/>
            : <p className='not-found'>We can't find the project you are looking for, sorry :/</p>
            }
        </div>
    )
}

export default connect(
    mapStateToProps
)(ResearchResult)

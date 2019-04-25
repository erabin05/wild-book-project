import React, {useEffect} from 'react'
import projectsOfCategorie from './mockProjects'
import { numberOfprojectByRow, numberOfProjectByScreenSize, projectsInRowOfNumber} from './projectDistributionInRows'

import { connect } from 'react-redux'

import ProjectPreview from '../Previews/ProjectPreview/ProjectPreview'
import FocusOnProject from '../Previews/FocusOnProject/FocusOnProject'

const mapStateToProps = state => ({
    screenSize: state.screenSize
});

const DedicatedPage = ({screenSize}) => {
    const categorie = projectsOfCategorie[0].categorie
    const categorieId = projectsOfCategorie[0].categorId
    const projects = projectsInRowOfNumber(projectsOfCategorie[0].projects, numberOfprojectByRow(screenSize))

    return (
        <article className='dedicated-page'>
            <div className='dedicated-page-head'>
                <h1>{categorie}</h1>
            </div>
            {projects.map((projectsByfour, i) => (
                <div key={i} className='dedicated-page-projects'>
                    <div    className='project-by-four'>
                        {projectsByfour.map((project, j) => (
                            <ProjectPreview key={j} {...project} rowId={categorieId} innerRowId={i}/>
                        ))}
                    </div>
                    <FocusOnProject rowId={categorieId} innerRowId={i}/>
                </div>
                )
            )}
        </article>
    )
}

export default connect(
    mapStateToProps
)(DedicatedPage)

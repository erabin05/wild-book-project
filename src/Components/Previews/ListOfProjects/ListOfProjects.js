import React from 'react'

import { connect } from 'react-redux'

import { numberOfprojectByRow, projectsInRowOfNumber} from './projectDistributionInRows'

import ProjectPreview from '../ProjectPreview/ProjectPreview'
import FocusOnProject from '../FocusOnProject/FocusOnProject'

const mapStateToProps = state => ({
    screenSize: state.screenSize
});

const ListOfProject = ({screenSize, projects}) => {

    const listOfProjects = projectsInRowOfNumber(projects, numberOfprojectByRow(screenSize))

    return(
        <div>
            {listOfProjects.map((projectsByfour, i) => (
                <div key={i} className='list-of-projects'>
                    <div    className='project-by-four'>
                        {projectsByfour.map((project, j) => (
                            <ProjectPreview key={j} {...project} rowId={0} innerRowId={i}/>
                        ))}
                    </div>
                    <FocusOnProject rowId={0} innerRowId={i}/>
                </div>
                )
            )}
        </div>
    )
}

export default connect(
    mapStateToProps
)(ListOfProject)

import React, {useState} from 'react'
import './_rows-projects.scss'

import { connect } from "react-redux";

import FocusOnProject from '../FocusOnProject/FocusOnProject'
import  ProjectPreview from '../ProjectPreview/ProjectPreview'

const mapStateToProps = state => ({
    screenSize: state.screenSize
  });

const RowsProjects = ({categorie, projects, screenSize}) => {

    // Animation right left position
    const [isFocusedOn, setIsFocusedOn] = useState(0)
    const [rowPosition, SetRowPosition] = useState(0)


    const [rowHeight, setRowHeight] = useState(0)

    // All projects in rows of 4 or 3 or 2
    const numberOfProjectsInRow = numberOfprojectByRow(screenSize)
    const projectsInRow = projectsInRowOfNumber(numberOfProjectByScreenSize(projects, screenSize), numberOfProjectsInRow)
    const isOnDesktop = screenSize === 'desktop' 

    const setRowHeightFromProjectPreview =  projectPreviewHeight => setRowHeight(projectPreviewHeight + 50)

    return (
    <article className='rows-projects'>
        {/* TITLE */}
        <div className='row-title'>
            <h2>{categorie}</h2>
            {!isOnDesktop && <button className='outline-button'>Voir plus ></button>}
        </div>
        {/* ROW */}
        <div style={{height : isOnDesktop && rowHeight}}>

            {/* Navigation arrows*/}
            { isOnDesktop && 
            <button className='left' 
                    onClick={()=> {SetRowPosition(rowPosition + 80); setIsFocusedOn(isFocusedOn-1)}}
                    style={{display : isFocusedOn === 0 ? 'none' : 'block'}}
            ><img src={require('./arrow.png')} alt='arrow left'/></button>}
            { isOnDesktop && 
            <button className='right' 
                    onClick={()=> {SetRowPosition(rowPosition - 80); setIsFocusedOn(isFocusedOn+1)}} 
                    style={{display : isFocusedOn === projectsInRow.length-1 ? 'none' : 'block'}}
            ><img src={require('./arrow.png')} alt='arrow right'/></button> }

            {/* List of projects */}
            {projectsInRow.map((projectsByfour, i) => (
                <div key={i}>
                    <div    className='project-by-four' 
                            style={{marginLeft : isOnDesktop && `${10 + (i*80) + rowPosition}%`, 
                                    opacity : isOnDesktop && isFocusedOn !== i ? '0.3': '1'}}
                    >
                        {projectsByfour.map((project, j) => (
                            <ProjectPreview key={j} {...project} setRowHeight={setRowHeightFromProjectPreview}/>
                        ))}
                    </div>
                    { screenSize === 'phone' && <FocusOnProject/>}
                </div>
                )
            )}
        </div> 
        { screenSize !== 'phone' && <FocusOnProject/>}

    </article> 
    )
}

const numberOfprojectByRow = screenSize => {
    switch (screenSize) {
        case 'desktop': 
            return 4
        case 'tablet': 
            return 3
        case 'phone': 
            return 2
    }
}

const numberOfProjectByScreenSize = (projects, screenSize) => {
    switch (screenSize) {
        case 'desktop': 
            return projects
        case 'tablet': 
            return [projects[0], projects[1] , projects[2]]
        case 'phone': 
            return [projects[0], projects[1] , projects[2], projects[3]]
    }
}

const projectsInRowOfNumber = (projects, number) => {
    let projectsInRows = []
    let projectByfour = []

    projects.map((project, id) => {
        projectByfour = [...projectByfour, project]
        if ((id+1)%number === 0 || (id+1)%number !== 0 && (id+1) === projects.length) {
            projectsInRows = [...projectsInRows, projectByfour]
            projectByfour = []
        } 
    })
    return projectsInRows
}

export default connect(mapStateToProps)(RowsProjects)
    
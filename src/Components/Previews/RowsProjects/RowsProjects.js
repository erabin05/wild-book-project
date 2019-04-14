import React, {useState, useRef, useEffect} from 'react'
import { connect } from "react-redux";
import './_rows-projects.scss'

import  ProjectPreview from '../ProjectPreview/ProjectPreview'

const useNumberOfprojectByRow = screenSize => {
    switch (screenSize) {
        case 'desktop': 
            return 4
        case 'tablet': 
            return 3
        case 'phone': 
            return 2
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

const RowsProjects = ({categorie, projects, screenSize}) => {

    // Animation right left position
    const [isFocusedOn, setIsFocusedOn] = useState(0)
    const [rowPosition, SetRowPosition] = useState(0)

    // Row height adjust depending on its content
    const [rowHeight,setRowHeight] = useState(0)
    const projectHeight = useRef(undefined)

    // All projects in rows of 4 or 3 or 2
    const numberOfProjectsInRow = useNumberOfprojectByRow(screenSize)
    const projectsInRow = projectsInRowOfNumber(projects, numberOfProjectsInRow)
    const isOnDesktop = numberOfProjectsInRow === 4 

    useEffect(() => {
        isOnDesktop && setRowHeight(projectHeight.current.clientHeight)
    })

    return (
    <article className='rows-projects'>
        <h2>{categorie}</h2>
        <div style={{height : isOnDesktop && rowHeight}}>
            {/* Row navigation */}
            { isOnDesktop && 
            <button className='left' 
                    onClick={()=> {SetRowPosition(rowPosition + 80); setIsFocusedOn(isFocusedOn-1)}}
                    style={{display : isFocusedOn === 0 ? 'none' : 'block'}}
            >left</button>}
            { isOnDesktop && 
            <button className='right' 
                    onClick={()=> {SetRowPosition(rowPosition - 80); setIsFocusedOn(isFocusedOn+1)}} 
                    style={{display : isFocusedOn === projectsInRow.length-1 ? 'none' : 'block'}}
            >right</button> }
            
            {/* Projects */}
            {projectsInRow.map((projectsByfour, i) => (
                    <div    className='project-by-four' 
                            key={i} 
                            style={{marginLeft : isOnDesktop && `${10 + (i*80) + rowPosition}%`, 
                                    opacity : isOnDesktop && isFocusedOn !== i ? '0.3': '1'}}
                            ref={projectHeight}
                    >
                        {projectsByfour.map((project, j) => <ProjectPreview key={j} {...project}/>)}
                    </div>
                )
            )}
        </div>
    </article> 
    )
}

const mapStateToProps = state => ({
    screenSize: state.screenSize
  });

export default connect(
    mapStateToProps
    )(RowsProjects)
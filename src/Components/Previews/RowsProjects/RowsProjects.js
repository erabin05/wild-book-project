import React, { useState, useEffect } from 'react'
import './_rows-projects.scss'
import { numberOfprojectByRow, numberOfProjectByScreenSize, projectsInRowOfNumber} from '../../User/projectDistributionInRows'

import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import axios from 'axios'

import { ArrowLeft, ArrowRight } from './Arrows'
import FocusOnProject from '../FocusOnProject/FocusOnProject'
import  ProjectPreview from '../ProjectPreview/ProjectPreview'

const mapStateToProps = state => ({
    screenSize: state.screenSize
});

const RowsProjects = ({
                        rowId,
                        screenSize,
                        categorie,
                        idInCategorie
                    }) => {

    //PROJECTS
    const [projects, setProjects] = useState([])

    // Animation right left position
    const [isFocusedOn, setIsFocusedOn] = useState(0)
    const [rowPosition, SetRowPosition] = useState(0)

    const [rowHeight, setRowHeight] = useState(0)

    // All projects in rows of 4 or 3 or 2
    const numberOfProjectsInRow = numberOfprojectByRow(screenSize)
    const projectsInRow = projectsInRowOfNumber(numberOfProjectByScreenSize(projects, screenSize), numberOfProjectsInRow)
    const isOnDesktop = screenSize === 'desktop' 

    const setRowHeightFromProjectPreview =  projectPreviewHeight => setRowHeight(projectPreviewHeight + 40)

    useEffect(()=>{
        axios.get(`http://localhost:5000/projects/${categorie}=${idInCategorie}`)
            .then(res => {
                setProjects(res.data)
            })
    },[])

    return (
    <article className='rows-projects'>
        {/* TITLE */}
        { projects[0] &&
        <div className='row-title'>
            <h2>{projects[0].campus.name}</h2>
            <Link to={`${projects[0].campus.name} ${categorie} ${idInCategorie}`.replace(/ /g,"-")}>
                <button className='outline-button'>Voir plus ></button>
            </Link>
        </div>
        }
        {/* ROW */}
        <div style={{height : isOnDesktop && rowHeight}}>

            {/* Navigation arrows*/}
            { isOnDesktop && 
            <button className='left' 
                    onClick={()=> {SetRowPosition(rowPosition + 80); setIsFocusedOn(isFocusedOn-1)}}
                    style={{display : isFocusedOn === 0 ? 'none' : 'block'}}
            ><ArrowLeft/></button>}
            { isOnDesktop && 
            <button className='right' 
                    onClick={()=> {SetRowPosition(rowPosition - 80); setIsFocusedOn(isFocusedOn+1)}} 
                    style={{display : isFocusedOn === projectsInRow.length-1 ? 'none' : 'block'}}
            ><ArrowRight/></button> }

            {/* List of projects */}
            {projectsInRow.map((projectsByfour, i) => (
                <div key={i}>
                    <div    className='project-by-four' 
                            style={{marginLeft : isOnDesktop && `${10 + (i*80) + rowPosition}%`, 
                                    opacity : isOnDesktop && isFocusedOn !== i ? '0.3': '1'}}
                    >
                        {projectsByfour.map((project, j) => (
                            <ProjectPreview key={j} {...project} rowId={rowId} innerRowId={i} setRowHeight={setRowHeightFromProjectPreview}/>
                        ))}
                    </div>
                    { screenSize === 'phone' && <FocusOnProject rowId={rowId} innerRowId={i}/>}
                </div>
                )
            )}
        </div> 
        { screenSize !== 'phone' && <FocusOnProject rowId={rowId}/>}

    </article> 
    )
}

export default connect(
    mapStateToProps
)(RowsProjects)
    
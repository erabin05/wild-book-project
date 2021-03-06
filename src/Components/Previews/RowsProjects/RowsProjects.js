import React, { useState, useEffect } from 'react'
import './_rows-projects.scss'
import { 
    numberOfprojectByRow, 
    numberOfProjectByScreenSize, 
    projectsInRowOfNumber
} from '../../Previews/ListOfProjects/projectDistributionInRows'

import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import axios from 'axios'

import { ArrowLeft, ArrowRight } from '../../Pictos/Arrows'
import FocusOnProject from '../FocusOnProject/FocusOnProject'
import  ProjectPreview from '../ProjectPreview/ProjectPreview'

const mapStateToProps = state => ({
    screenSize: state.screenSize
});

const RowsProjects = ({
                        rowId,
                        screenSize,
                        categorie,
                        searchParam
                    }) => {

    //PROJECTS
    const [projects, setProjects] = useState([])
    const [projectsCategorie, setProjectsCategorie] = useState({})

    // Animation right left position
    const [isFocusedOn, setIsFocusedOn] = useState(0)
    const [rowPosition, SetRowPosition] = useState(0)

    const [rowHeight, setRowHeight] = useState(0)

    // Get projects
    useEffect(()=>{
        axios.get(`http://localhost:5000/${categorie}/${searchParam}`)
            .then(categRes => {
                axios.get(`http://localhost:5000/project/${categorie}=${categRes.data[0].id}`)
                    .then(projectsRes => {
                        setProjects(projectsRes.data.projects)
                        setProjectsCategorie(projectsRes.data.categorie)
                })
            })
    },[])

    // All projects in rows of 4 or 3 or 2
    const numberOfProjectsInRow = numberOfprojectByRow(screenSize)
    const projectsInRow = projectsInRowOfNumber(numberOfProjectByScreenSize(projects, screenSize), numberOfProjectsInRow)
    const isOnDesktop = screenSize === 'desktop' 

    const setRowHeightFromProjectPreview =  projectPreviewHeight => setRowHeight(projectPreviewHeight + 40)

    return (
    <article className='rows-projects'>
        {/* TITLE */}
        <div className='row-title'>
            <h2>{projectsCategorie.name}</h2>
            <Link to={`of/${projectsCategorie.name}_${projectsCategorie.type}_${projectsCategorie.id}`.replace(/ /g,"-")}>
                <button className='outline-button'>Voir plus ></button>
            </Link>
        </div>
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
                            <ProjectPreview 
                                key={j} {...project} 
                                rowId={rowId} 
                                innerRowId={i} 
                                setRowHeight={setRowHeightFromProjectPreview}
                            />
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
    
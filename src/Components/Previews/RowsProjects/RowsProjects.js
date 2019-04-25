import React, { useState } from 'react'
import './_rows-projects.scss'
import { numberOfprojectByRow, numberOfProjectByScreenSize, projectsInRowOfNumber} from '../../User/projectDistributionInRows'

import { Link } from 'react-router-dom'
import { connect } from "react-redux";

import { setDedicatedCategorie } from '../../../Reducers/dedicatedCategorie/action'

import { ArrowLeft, ArrowRight } from './Arrows'
import FocusOnProject from '../FocusOnProject/FocusOnProject'
import  ProjectPreview from '../ProjectPreview/ProjectPreview'

const mapStateToProps = state => ({
    screenSize: state.screenSize
});

const mapDispatchToProps = dispatch => ({
    setDedicatedCategorie : categorie => dispatch( setDedicatedCategorie(categorie) ),
});

const RowsProjects = ({
                        categorie, 
                        categorId, 
                        projects, 
                        screenSize, 
                        setDedicatedCategorie
                    }) => {

    // Animation right left position
    const [isFocusedOn, setIsFocusedOn] = useState(0)
    const [rowPosition, SetRowPosition] = useState(0)

    const [rowHeight, setRowHeight] = useState(0)

    // All projects in rows of 4 or 3 or 2
    const numberOfProjectsInRow = numberOfprojectByRow(screenSize)
    const projectsInRow = projectsInRowOfNumber(numberOfProjectByScreenSize(projects, screenSize), numberOfProjectsInRow)
    const isOnDesktop = screenSize === 'desktop' 

    const setRowHeightFromProjectPreview =  projectPreviewHeight => setRowHeight(projectPreviewHeight + 40)

    return (
    <article className='rows-projects'>
        {/* TITLE */}
        <div className='row-title'>
            <h2>{categorie}</h2>
            <Link to={categorie.replace(/ /g,"-")}>
                <button className='outline-button'
                        onClick={()=>{
                            setDedicatedCategorie({
                                categorie,
                                projects
                            })  
                        }}
                >Voir plus ></button>
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
                            <ProjectPreview key={j} {...project} rowId={categorId} innerRowId={i} setRowHeight={setRowHeightFromProjectPreview}/>
                        ))}
                    </div>
                    { screenSize === 'phone' && <FocusOnProject rowId={categorId} innerRowId={i}/>}
                </div>
                )
            )}
        </div> 
        { screenSize !== 'phone' && <FocusOnProject rowId={categorId}/>}

    </article> 
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RowsProjects)
    
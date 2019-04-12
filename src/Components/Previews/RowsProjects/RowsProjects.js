import React, {useState} from 'react'
import './_rows-projects.scss'

import  ProjectPreview from '../ProjectPreview/ProjectPreview'


const projectsInRowByFour = projects => {
    let projectsInRows = []
    let projectByfour = []

    console.log()

    projects.map((project, id) => {
        projectByfour = [...projectByfour, project]
        if ((id+1)%4 === 0 || (id+1) > Math.floor(projects.length/4)*4 && (id+1) === projects.length) {
            console.log(projectByfour)
            projectsInRows = [...projectsInRows, projectByfour]
            projectByfour = []
        } 
    })

    return projectsInRows
}

const RowsProjects = ({categorie, projects}) => {

    projectsInRowByFour(projects);

    return (
        <article className='rows-projects'>
            {projects.map((project, id) => <ProjectPreview key={id} {...project}/>)}
        </article> 
    )
}

export default RowsProjects
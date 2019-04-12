import React from 'react'
import './_rows-projects.scss'

import  ProjectPreview from '../ProjectPreview/ProjectPreview'


const projectsInRowByFour = projects => {
    let projectsInRows = []
    let projectByfour = []

    projects.map((project, id) => {
        projectByfour = [...projectByfour, project]
        if ((id+1)%4 === 0 || (id+1) > Math.floor(projects.length/4)*4 && (id+1) === projects.length) {
            projectsInRows = [...projectsInRows, projectByfour]
            projectByfour = []
        } 
    })

    return projectsInRows
}

const RowsProjects = ({categorie, projects}) => (
    <article className='rows-projects'>
        {projectsInRowByFour(projects).map((projectsByfour, i) => (
                <div className='project-by-four' key={i}>
                    {projectsByfour.map((project, j) => <ProjectPreview key={j} {...project}/>)}
                </div>
            )
        )}
    </article> 
)

export default RowsProjects
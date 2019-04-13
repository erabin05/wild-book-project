import React, {useState} from 'react'
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


const RowsProjects = ({categorie, projects}) => {
    const [isFocusedOn, setIsFocusedOn] = useState(0)
    const [rowPosition, SetRowPosition] = useState(0)

    return (
    <article className='rows-projects'>
        {projectsInRowByFour(projects).map((projectsByfour, i) => (
                <div    className='project-by-four' 
                        key={i} 
                        style={{marginLeft : `${10 + (i*80) + rowPosition}%`, 
                                opacity : isFocusedOn === i ? '1': '0.3'}}
                >
                    {projectsByfour.map((project, j) => <ProjectPreview key={j} {...project}/>)}
                </div>
            )
        )}
        <button onClick={()=> {SetRowPosition(rowPosition - 80); setIsFocusedOn(isFocusedOn+1)}} >left</button>
        <button onClick={()=> {SetRowPosition(rowPosition + 80); setIsFocusedOn(isFocusedOn-1)}}>rigth</button>
    </article> 
    )
}

export default RowsProjects
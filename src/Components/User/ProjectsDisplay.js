import React from 'react'
import projectsRows from './mockProjects'

import RowsProjects from '../Previews/RowsProjects/RowsProjects'

const ProjectDisplay = () => (
    <section className='project-display'>
        {projectsRows.map((project, id) => <RowsProjects key={id} rowId={id}/>)}
    </section>
    )

export default ProjectDisplay

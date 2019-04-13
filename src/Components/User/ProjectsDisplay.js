import React from 'react'

import RowsProjects from '../Previews/RowsProjects/RowsProjects'

const ProjectDisplay = ({projectsRows}) => (
    <section className='project-display'>
        {projectsRows.map((project, id) => <RowsProjects key={id} {...project}/>)}
    </section>
    )

export default ProjectDisplay
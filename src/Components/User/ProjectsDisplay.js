import React, { useState, useEffect } from 'react'

import RowsProjects from '../Previews/RowsProjects/RowsProjects'

const ProjectDisplay = () => {
    const [projectsRows, setProjectRows] = useState([])

    useEffect(()=> {
        setProjectRows([
            {
                categorie : 'campus',
                idInCategorie : 1
            }
        ])
    })

    return (
        <section className='project-display'>
            {projectsRows.map((categorie, id) => <RowsProjects key={id} rowId={id} {...categorie}/>)}
        </section>
    )
}

export default ProjectDisplay

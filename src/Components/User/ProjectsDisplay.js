import React from 'react'

import ProjectPreview from '../Previews/ProjectPreview/ProjectPreview'

const ProjectDisplay = ({projects}) => (<section className='project-display'>{projects.map((project, id) => <ProjectPreview key={id} {...project}/>)}</section>)

export default ProjectDisplay
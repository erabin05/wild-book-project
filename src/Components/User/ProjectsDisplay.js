import React from 'react'

import ProjectPreview from '../Previews/ProjectPreview/ProjectPreview'

const projects = [{},{},{},{},{},{}]

const ProjectDisplay = () => (<section className='project-display'>{projects.map((project, id) => <ProjectPreview key={id}/>)}</section>)

export default ProjectDisplay
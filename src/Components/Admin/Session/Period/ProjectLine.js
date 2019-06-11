import React from 'react'

import StudentNamePreview from '../../../Previews/StudentNamePreview/StudentNamePreview'
import Edit from '../../../Pictos/Edit'

const ProjectLine = ({title, imgLink, students, url, githubLink}) => (
    <section className='admin-project-line'>
        <div className='infos'>
            <figure><img src={imgLink} alt={title}/></figure>
            <div>
                <div className='go-to-buttons'>
                    <p className='title'>{title}</p>
                        {url && <a  
                            className='inline-button' 
                            href={url}
                            rel='noreferrer noopener'
                            target='_blank'
                        >Go to website</a>}
                        {githubLink && <a   
                            className='inline-button'
                            href={githubLink}
                            rel='noreferrer noopener'
                            target='_blank'
                        >Go to Github</a>}
                </div>
                <div className='students'>
                    {students.map((student, index)=><StudentNamePreview key={index} {...student}/>)}
                </div>
            </div>
        </div>
        <div className='buttons'>
            <button className='outline-button'><div><Edit/></div>Edit</button>
            <button className='outline-button'>Delete</button>
        </div>
    </section>
)

export default ProjectLine

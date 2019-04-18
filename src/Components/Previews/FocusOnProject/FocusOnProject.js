import React from 'react'
import './_focus-on-project.scss'

import { connect } from "react-redux"

import StudentPreview from '../StudentPreview/StudentPreview'

const mapStateToProps = state => ({
    projectSelectedForFocus: state.projectSelectedForFocus
  });

const FocusOnProject = ({projectSelectedForFocus}) => {
    const { title, description, students, websiteLink, githubLink } = projectSelectedForFocus
    return(
    <article className='focus-on-project'>
        <figure></figure>
        <section className='focus-project-descritpion'>
            <div className='focus-project-text'>
                <h2>{title} </h2>
                <p>{description}</p>
            </div>
            <div>
                {websiteLink && <a  className='inline-button' 
                                    href={websiteLink}
                                    rel='noreferrer noopener'
                                    target='_blank'
                >Go to website</a>}
                {githubLink && <a   className='outline-button'
                                    href={githubLink}
                                    rel='noreferrer noopener'
                                    target='_blank'
                >Go to Github</a>}
            </div>
        </section>
        <section className='focus-students'>
            {students.map((student, i) => <StudentPreview key={i} {...student}/>)}
        </section>
    </article>
)}

export default connect(mapStateToProps)(FocusOnProject)

import React, {useState} from 'react'
import './_focus-on-project.scss'

import { connect } from "react-redux"

import StudentPreview from '../StudentPreview/StudentPreview'

const mapStateToProps = state => ({
    projectSelectedForFocus: state.projectSelectedForFocus
  });

const FocusOnProject = ({projectSelectedForFocus}) => {
    const { title, description, students, websiteLink, githubLink } = projectSelectedForFocus
    const [studentsCarouselPosition, setStudentsCarouselPosition] = useState(0)
    const studentsByRowsOfThree = byRowsOfThree(students)
    
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
            <p>{students.length} contributors</p>
            {/* Button Up */}
            <div className='focus-arrow-up'>
                { studentsCarouselPosition < 0 && 
                    <div onClick={()=>setStudentsCarouselPosition(studentsCarouselPosition + 150)}></div>
                }
            </div>
            {/* Students */}
            <section>
                    {studentsByRowsOfThree.map( (studentByThree, i) => (
                        <div key={i} style={{marginTop : `${(i * 150) + studentsCarouselPosition}px`}}>
                            {studentByThree.map((student, j) => <StudentPreview key={j} {...student}/>)}
                        </div>
                    ))}
            </section>
            {/* Button Down */}
            <div className='focus-arrow-down' >
                { studentsCarouselPosition !== (studentsByRowsOfThree.length-1)*-150 && 
                    <div onClick={()=>setStudentsCarouselPosition(studentsCarouselPosition - 150)}></div>
                }
            </div>
        </section>
    </article>
)}

const byRowsOfThree = students => {
    let studentsInRows = []
    let studentsByThree = []

    students.map((student, id) => {
        studentsByThree = [...studentsByThree, student]
        if ((id+1)%3 === 0 || (id+1)%3 !== 0 && (id+1) === students.length) {
            studentsInRows = [...studentsInRows, studentsByThree]
            studentsByThree = []
        } 
    })
    return studentsInRows
}

export default connect(mapStateToProps)(FocusOnProject)

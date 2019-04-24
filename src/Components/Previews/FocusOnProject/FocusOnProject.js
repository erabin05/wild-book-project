import React, {useState, useEffect} from 'react'
import './_focus-on-project.scss'
import {ArrowUp, ArrowDown} from './Arrow'

import { connect } from "react-redux"
import { setProjectSelectedForFocus } from '../../../Reducers/projectSelectedForFocus/action'

import { Cross } from './Cross'
import StudentPreview from '../StudentPreview/StudentPreview'

const mapStateToProps = state => ({
    screenSize : state.screenSize,
    projectSelectedForFocus: state.projectSelectedForFocus,
    rowIdOfSelectedProject: state.rowIdOfSelectedProject
  });

const mapDispatchToProps = dispatch => ({
    setProjectSelectedForFocus: project => dispatch( setProjectSelectedForFocus(project) )
});

const FocusOnProject = ({rowId, rowPhoneId, projectSelectedForFocus, rowIdOfSelectedProject, screenSize, setProjectSelectedForFocus}) => {

    const { title, description, students, websiteLink, githubLink } = projectSelectedForFocus
    const [studentsCarouselPosition, setStudentsCarouselPosition] = useState(0)
    const [focusHeight, setFocusHeight] = useState(screenSize)
    const studentsByRowsOfThree = byRowsOfThree(students)

    useEffect(()=>setStudentsCarouselPosition(0), [projectSelectedForFocus])
    useEffect(()=>setFocusHeight(screenSize !== 'phone' ? '300px' : '750px'), [screenSize])
    useEffect(()=>console.log(rowPhoneId))
    
    return(
    <article    
        className='focus-on-project-container' 
        style={{
            height : projectSelectedForFocus !== 0
            && rowIdOfSelectedProject === rowId
            && projectSelectedForFocus.id
            && focusHeight
        }}
    >
        <div    
            className='focus-on-projetc-exit'
            onClick={()=>setProjectSelectedForFocus({
                title : projectSelectedForFocus.title, 
                description :projectSelectedForFocus.description,
                students : projectSelectedForFocus.students
            })}
        ><Cross/></div>
        <div className='focus-on-project'>
            <figure></figure>
            <section className='focus-project-description'>
                <div className='focus-project-text'>
                    <h2>{title} </h2>
                    <p>{description}</p>
                </div>
                <div className='focus-project-buttons'>
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
                        <div onClick={()=>setStudentsCarouselPosition(studentsCarouselPosition + 150)}>{ArrowUp()}</div>
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
                        <div onClick={()=>setStudentsCarouselPosition(studentsCarouselPosition - 150)}>{ArrowDown()}</div>
                    }
                </div>
            </section>
        </div>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FocusOnProject)

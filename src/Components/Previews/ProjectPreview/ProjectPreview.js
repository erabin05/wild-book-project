import React, {useRef, useEffect} from 'react'
import { connect } from "react-redux";
import './ProjectPreview.scss'

import { setProjectSelectedForFocus } from '../../../Reducers/projectSelectedForFocus/action'

import StudentNamePreview from '../StudentNamePreview/StudentNamePreview'

const mapStateToProps = state => ({
    screenSize: state.screenSize,
    projectSelectedForFocus: state.projectSelectedForFocus
  });

  const mapDispatchToProps = dispatch => ({
    setProjectSelectedForFocus: project => dispatch( setProjectSelectedForFocus(project) )
  });

const ProjetcPreview = ({id, title, description, websiteLink, githubLink, students, screenSize, setRowHeight, projectSelectedForFocus, setProjectSelectedForFocus}) => {

    // get height of element for row
    const projectPreviewHeight = useRef()
    useEffect(()=> {setRowHeight(projectPreviewHeight.current.clientHeight)},[])

    return (
        <article    className='project-preview'
                    ref = {projectPreviewHeight}
                    onClick={()=> setProjectSelectedForFocus({
                        id,
                        title,
                        description,
                        students,
                        websiteLink,
                        githubLink
                    })}
        >
            <figure style={{borderColor: projectSelectedForFocus.id === id && '#F37173'}}><img src='' alt=''/></figure>
            <div>
                <h3>{title}</h3>
                < div></div>
                { screenSize !== 'phone' &&
                <section>
                    {students.map((student, id) => <StudentNamePreview key={id} name={student}/>)}
                </section>
                }
            </div> 
        </article>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(ProjetcPreview)

import React, {useRef, useEffect} from 'react'
import { connect } from "react-redux";
import './ProjectPreview.scss'

import StudentNamePreview from '../StudentNamePreview/StudentNamePreview'

const mapStateToProps = state => ({
    screenSize: state.screenSize
  });

const ProjetcPreview = ({title, students, setRowHeight, screenSize}) => {
    
    // get height of element for row
    const projectPreviewHeight = useRef()
    useEffect(()=> {setRowHeight(projectPreviewHeight.current.clientHeight)},[])

    return (
        <article    className='project-preview'
                    ref = {projectPreviewHeight}
        >
            <figure><img src='' alt=''/></figure>
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
    mapStateToProps
    )(ProjetcPreview)
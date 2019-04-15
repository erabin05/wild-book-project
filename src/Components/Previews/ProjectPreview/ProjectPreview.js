import React, {useRef, useEffect} from 'react'
import './ProjectPreview.scss'

import StudentNamePreview from '../StudentNamePreview/StudentNamePreview'

const ProjetcPreview = ({title, students, setRowHeight}) => {
    const projectPreviewHeight = useRef()

    useEffect(()=> {setRowHeight(projectPreviewHeight.current.clientHeight)},[])
    return (
        <article    className='project-preview'
                    ref = {projectPreviewHeight}
        >
            <figure><img src='' alt=''/></figure>
            <div>
                <h3>{title}</h3>
                <div></div>
                <section>
                    {students.map((student, id) => <StudentNamePreview key={id} name={student}/>)}
                </section>
            </div> 
        </article>
    )
}

export default ProjetcPreview
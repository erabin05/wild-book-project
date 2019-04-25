import React, {useRef, useEffect} from 'react'
import { connect } from "react-redux"
import './ProjectPreview.scss'

import { setProjectSelectedForFocus } from '../../../Reducers/projectSelectedForFocus/action'
import { setRowIdOfSelectedProject } from '../../../Reducers/rowIdOfProjectSelected/action'
import { setInnerRowIdOfProjectSelected } from '../../../Reducers/innerRowIdOfProjectSelected/action'

import StudentNamePreview from '../StudentNamePreview/StudentNamePreview'

const mapStateToProps = state => ({
    screenSize: state.screenSize,
    selectedFocusScrollPosition : state.selectedFocusScrollPosition,
    projectSelectedForFocus: state.projectSelectedForFocus
  });

  const mapDispatchToProps = dispatch => ({
    setProjectSelectedForFocus : project => dispatch( setProjectSelectedForFocus(project) ),
    setRowIdOfSelectedProject : rowId => dispatch( setRowIdOfSelectedProject(rowId) ),
    setInnerRowIdOfProjectSelected : innerRowId => dispatch( setInnerRowIdOfProjectSelected(innerRowId) )
  });

const ProjetcPreview = ({
                            id, 
                            title, 
                            description, 
                            websiteLink, 
                            githubLink, 
                            rowId,
                            innerRowId,
                            students, 
                            screenSize, 
                            setRowHeight, 
                            projectSelectedForFocus, 
                            setProjectSelectedForFocus,
                            setRowIdOfSelectedProject,
                            setInnerRowIdOfProjectSelected
                        }) => {

    // get height of element for row
    const projectPreviewElement = useRef()
    useEffect(()=> {setRowHeight(projectPreviewElement.current.clientHeight)},[])


    const isProjectSelected = projectSelectedForFocus.id === id 

    return (
        <article    className='project-preview'
                    ref = {projectPreviewElement}
                    onClick={()=> {
                        setProjectSelectedForFocus(
                            {
                                id : isProjectSelected ? undefined : id,
                                title,
                                description,
                                students,
                                websiteLink,
                                githubLink
                            }
                        )
                        setRowIdOfSelectedProject(isProjectSelected ? 0 : rowId)
                        setInnerRowIdOfProjectSelected(innerRowId)
                    }}
        >
            <figure style={{borderColor: isProjectSelected && '#F37173'}}><img src='' alt=''/></figure>
            <div>
                <h3>{title}</h3>
                < div></div>
                { screenSize !== 'phone' &&
                <section>
                    {students.map((student, id) => <StudentNamePreview key={id} {...student}/>)}
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

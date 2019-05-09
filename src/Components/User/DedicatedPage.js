import React, {useState ,useEffect} from 'react'
import projectsOfCategorie from './mockProjects'
import { numberOfprojectByRow, numberOfProjectByScreenSize, projectsInRowOfNumber} from './projectDistributionInRows'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

import ProjectPreview from '../Previews/ProjectPreview/ProjectPreview'
import FocusOnProject from '../Previews/FocusOnProject/FocusOnProject'

const mapStateToProps = state => ({
    screenSize: state.screenSize
});

const DedicatedPage = ({screenSize}) => {

    const [projetcsInCategorie, setprojetcsInCategorie] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [pageTitle, setPageTitle] = useState('')


    const projects = projectsInRowOfNumber(projetcsInCategorie, numberOfprojectByRow(screenSize))

    useEffect(()=>{

        const [title, categorie, idInCategorie]= window.location.pathname.slice(1).split('-')
        setPageTitle(title)

        axios.get(`http://localhost:5000/projects/${categorie}=${idInCategorie}`)
            .then(res => {
                setprojetcsInCategorie(res.data)
            })
            .then(setIsLoading(false))
    },[])

    return (
        <article className='dedicated-page'>
            {isLoading && <div className='loadingPage'></div>}
            <div className='dedicated-page-head'>
                <h1>{pageTitle}</h1>
                <Link to='/'>
                    <button className='inline-button'>{'< Go Back'}</button>
                </Link>
            </div>
            {projects.map((projectsByfour, i) => (
                <div key={i} className='dedicated-page-projects'>
                    <div    className='project-by-four'>
                        {projectsByfour.map((project, j) => (
                            <ProjectPreview key={j} {...project} rowId={0} innerRowId={i}/>
                        ))}
                    </div>
                    <FocusOnProject rowId={0} innerRowId={i}/>
                </div>
                )
            )}
        </article>
    )
}

export default connect(
    mapStateToProps
)(DedicatedPage)

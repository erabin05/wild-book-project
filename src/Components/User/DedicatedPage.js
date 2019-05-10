import React, {useState ,useEffect} from 'react'
import { numberOfprojectByRow, projectsInRowOfNumber} from './projectDistributionInRows'

import { Link } from 'react-router-dom'
import axios from 'axios'

import ListOfProjects from './ListOfProjects'

const DedicatedPage = () => {

    const [projetcsInCategorie, setprojetcsInCategorie] = useState([])
    const [projectsCategorie, setProjectsCategorie] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        const [title, categorie, idInCategorie]= window.location.pathname.slice(1).split('_')

        axios.get(`http://localhost:5000/projects/${categorie}=${idInCategorie}`)
            .then(res => {
                setprojetcsInCategorie(res.data.projects)
                setProjectsCategorie(res.data.categorie)
            })
            .then(setIsLoading(false))
    },[])

    return (
        <article className='dedicated-page'>
            {isLoading && <div className='loadingPage'></div>}
            <div className='dedicated-page-head'>
                <h1>{projectsCategorie.name}</h1>
                <Link to='/'>
                    <button className='inline-button'>{'< Go Back'}</button>
                </Link>
            </div>
            <ListOfProjects projects={projetcsInCategorie}/>
        </article>
    )
}

export default DedicatedPage

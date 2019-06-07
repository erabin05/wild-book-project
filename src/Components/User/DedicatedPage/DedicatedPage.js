import React, {useState ,useEffect} from 'react'
import './_dedicatedPage.scss'

import { Link } from 'react-router-dom'
import axios from 'axios'

import ListOfProjects from '../../Previews/ListOfProjects/ListOfProjects'

const DedicatedPage = () => {

    const [projetcsInCategorie, setprojetcsInCategorie] = useState([])
    const [projectsCategorie, setProjectsCategorie] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const [title, categorie, idInCategorie]= window.location.pathname.slice(1).split('_')

    useEffect(()=>{

        axios.get(`http://localhost:5000/project/${categorie}=${idInCategorie}`)
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
                <h1>{
                    projectsCategorie !== undefined && projectsCategorie.name === title
                    ? projectsCategorie.name
                    : title.substring(3, title.length)
                }</h1>
                <Link to='/'>
                    <button className='inline-button'>{'< Go Back'}</button>
                </Link>
            </div>
            {
                projetcsInCategorie.length > 0 
                ? <ListOfProjects projects={projetcsInCategorie}/>
                : <div className='error-msg'>Sorry, we don't have projects for '{title}', yet :) !</div>
            }
        </article>
    )
}

export default DedicatedPage

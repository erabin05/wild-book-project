import React, {useState, useEffect, useRef} from 'react'
import './_period.scss'

import axios from 'axios'

import ProjectLine from './ProjectLine'
import Plus from '../../../Pictos/Plus'

const Period = ({id, name, isEditSelected}) => {
    const [isSelected, setIsSelected] = useState(false)
    const [projects, setProjects] = useState([])
    const inputEl = useRef(null);

    useEffect(()=>{
        axios.get(`http://localhost:5000/project/period=${id}`)
            .then(res => setProjects(res.data.projects))
    }, [])

    return (
        <section className='admin-period'>
            <div onClick={() => setIsSelected(isSelected => !isSelected)}>
                <p className={isSelected ? 'select': 'unselect'}>{name}</p>
                {isEditSelected && <p>Delete</p>}
            </div>
            <section className='projects-list-container' style={{height : isSelected && `${inputEl.current.offsetHeight}px`}}>
                <div className='projects-list'ref={inputEl} >
                    <div>
                        <button className='outline-button'><div><Plus/></div>Add project</button>
                    </div>
                    {
                        projects.length > 0 
                        ? projects.map((project, index) => <ProjectLine key={index} {...project}/>)
                        : <p>There is no projects for this period ... Loser</p>
                    }
                </div>
            </section>
        </section>
    )
}


export default Period

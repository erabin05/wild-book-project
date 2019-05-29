import React, {useState, useRef} from 'react'
import './_period.scss'

import ProjectLine from './ProjectLine'

const Period = ({name}) => {
    const [isSelected, setIsSelected] = useState(false)
    const inputEl = useRef(null);

    const projects = [
        {
            title : 'The title of my great project',
            imgLink : '',
            url : 'http://localhost:3000',
            github : 'https://github.com/',
            students : [
                {
                    name : 'Clément Bechetoille'
                },
                {
                    name : 'Romain Guillemot'
                },
                {
                    name : 'Etienne Rabin'
                },
            ]
        },
    ]

    return (
        <section className='admin-period'>
            <div onClick={() => setIsSelected(isSelected => !isSelected)}>
                <p className={isSelected ? 'select': 'unselect'}>{name}</p>
            </div>
            <section className='projects-list-container' style={{height : isSelected && `${inputEl.current.offsetHeight}px`}}>
                <div className='projects-list'ref={inputEl} >
                    <div>
                        <button className='outline-button'>Add project</button>
                    </div>
                    {projects.map((project, index) => <ProjectLine key={index} {...project}/>)}
                </div>
            </section>
        </section>
    )
}


export default Period

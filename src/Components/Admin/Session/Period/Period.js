import React, {useState, useRef} from 'react'
import './_period.scss'

import ProjectLine from './ProjectLine'

const Period = ({name}) => {
    const [isSelected, setIsSelected] = useState(false)
    const inputEl = useRef(null);

    const projects = [
        {
            title : 'The title of my great project',
            imgLink : 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/32284078911705.5cb32bf636e7e.png',
            url : 'http://localhost:3000',
            githubLink : 'https://github.com/',
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
        {
            title : 'It is my project and not yours',
            imgLink : 'https://blogcdn1.secureserver.net/wp-content/uploads/start-a-website-get-started-min.jpg',
            url : 'http://localhost:3000',
            githubLink : 'https://github.com/',
            students : [
                {
                    name : 'Thomas Culdaut'
                },
                {
                    name : 'Romain Guillemot'
                },
                {
                    name : 'Etienne Rabin'
                },
                {
                    name : 'Nicolas Lamirault'
                },
                {
                    name : 'Fabian Samson'
                },
                {
                    name : 'Marion Guillaume'
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

import React from 'react'
import './ProjectPreview.scss'

import StudentNamePreview from '../StudentNamePreview/StudentNamePreview'

const projectStudents = ['Etienne RABIN','Thomas CULDAUT','Clement BECHETOILLE']

const ProjetcPreview = ({title, students}) => (
        <article className='user-project-preview'>
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

export default ProjetcPreview
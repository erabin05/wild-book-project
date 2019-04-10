import React from 'react'

const projectStudents = ['Etienne RABIN','Thomas CULDAUT','Clement BECHETOILLE']

const ProjetcPreview = () => {
    return (
        <article className='user-project-preview'>
            <figure><img src=''/></figure>
            <div>
                <h3>The title of my perfect project</h3>
                <div></div>
                <section>
                    {projectStudents.map(student => <p>{student}</p>)}
                </section>
            </div>
            
        </article>
    )
}

export default ProjetcPreview
const { expect } = require('chai')
const sortStudents = require('../routes/project/organizeProjects')

describe('Projects', ()=>{
    it('Should return an array of objects projects organised without double',()=>{
        const projects = [
            {
                id: 1,
                url: "http://localhost:3000/",
                title: "myProject",
                description: "A little description, not too much",
                githubLink: "https://github.com/erabin05/wild-book-project",
                imgLink: "https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/2082859/logo.png?1556122175",
                session_id: 1,
                session: "Février 2018",
                session_date: "2018-01-31T23:00:00.000Z",
                campus_id: 1,
                campus: "Reims",
                campus_latitude: 49.2566,
                campus_longitude: 4.03309,
                language_id: 2,
                language: "javaScript",
                student_id: 1,
                student_name: "Thomas Culdaut",
                student_github: "https://github.com/",
                student_linkedin: "https://www.linkedin.com"
            },
            {
                id: 1,
                url: "http://localhost:3000/",
                title: "myProject",
                description: "A little description, not too much",
                githubLink: "https://github.com/erabin05/wild-book-project",
                imgLink: "https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/2082859/logo.png?1556122175",
                session_id: 1,
                session: "Février 2018",
                session_date: "2018-01-31T23:00:00.000Z",
                campus_id: 1,
                campus: "Reims",
                campus_latitude: 49.2566,
                campus_longitude: 4.03309,
                language_id: 2,
                language: "javaScript",
                student_id: 2,
                student_name: "Romain Guillemot",
                student_github: "https://github.com/",
                student_linkedin: "https://www.linkedin.com"
            },
            {
                id: 1,
                url: "http://localhost:3000/",
                title: "myProject",
                description: "A little description, not too much",
                githubLink: "https://github.com/erabin05/wild-book-project",
                imgLink: "https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/2082859/logo.png?1556122175",
                session_id: 1,
                session: "Février 2018",
                session_date: "2018-01-31T23:00:00.000Z",
                campus_id: 1,
                campus: "Reims",
                campus_latitude: 49.2566,
                campus_longitude: 4.03309,
                language_id: 2,
                language: "javaScript",
                student_id: 3,
                student_name: "Clement Bechetoille",
                student_github: "https://github.com/",
                student_linkedin: "https://www.linkedin.com"
            },
            {
                id: 1,
                url: "http://localhost:3000/",
                title: "myProject",
                description: "A little description, not too much",
                githubLink: "https://github.com/erabin05/wild-book-project",
                imgLink: "https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/2082859/logo.png?1556122175",
                session_id: 1,
                session: "Février 2018",
                session_date: "2018-01-31T23:00:00.000Z",
                campus_id: 1,
                campus: "Reims",
                campus_latitude: 49.2566,
                campus_longitude: 4.03309,
                language_id: 4,
                language: "ReactJS",
                student_id: 1,
                student_name: "Thomas Culdaut",
                student_github: "https://github.com/",
                student_linkedin: "https://www.linkedin.com"
            },
            {
                id: 1,
                url: "http://localhost:3000/",
                title: "myProject",
                description: "A little description, not too much",
                githubLink: "https://github.com/erabin05/wild-book-project",
                imgLink: "https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/2082859/logo.png?1556122175",
                session_id: 1,
                session: "Février 2018",
                session_date: "2018-01-31T23:00:00.000Z",
                campus_id: 1,
                campus: "Reims",
                campus_latitude: 49.2566,
                campus_longitude: 4.03309,
                language_id: 4,
                language: "ReactJS",
                student_id: 2,
                student_name: "Romain Guillemot",
                student_github: "https://github.com/",
                student_linkedin: "https://www.linkedin.com"
            },
            {
                id: 1,
                url: "http://localhost:3000/",
                title: "myProject",
                description: "A little description, not too much",
                githubLink: "https://github.com/erabin05/wild-book-project",
                imgLink: "https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/2082859/logo.png?1556122175",
                session_id: 1,
                session: "Février 2018",
                session_date: "2018-01-31T23:00:00.000Z",
                campus_id: 1,
                campus: "Reims",
                campus_latitude: 49.2566,
                campus_longitude: 4.03309,
                language_id: 4,
                language: "ReactJS",
                student_id: 3,
                student_name: "Clement Bechetoille",
                student_github: "https://github.com/",
                student_linkedin: "https://www.linkedin.com"
            }
        ]

        const expected = {
            categorie: "undefined",
            projects: [{
                    id: 1,
                    url: "http://localhost:3000/",
                    title: "myProject",
                    description: "A little description, not too much",
                    githubLink: "https://github.com/erabin05/wild-book-project",
                    imgLink: "https://d1guu6n8gz71j.cloudfront.net/system/asset/logos/2082859/logo.png?1556122175",
                    session: {
                        id: 1,
                        name: "Février 2018",
                        date: "2018-01-31T23:00:00.000Z"
                    },
                    campus: {
                        id: 1,
                        name: "Reims",
                        latitude: 49.2566,
                        longitude: 4.03309
                    },
                    languages: [
                        {
                            id: 2,
                            name: "javaScript"
                        },
                        {
                            id: 4,
                            name: "ReactJS"
                        }
                    ],
                    students: [
                        {
                            id: 1,
                            name: "Thomas Culdaut",
                            github: "https://github.com/",
                            linkedin: "https://www.linkedin.com"
                        },
                        {
                            id: 2,
                            name: "Romain Guillemot",
                            github: "https://github.com/",
                            linkedin: "https://www.linkedin.com"
                        },
                        {
                            id: 3,
                            name: "Clement Bechetoille",
                            github: "https://github.com/",
                            linkedin: "https://www.linkedin.com"
                        }
                    ]
            }]}
        expect(sortStudents(projects)).to.deep.equal(expected)
    })
})

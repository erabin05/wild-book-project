const express = require('express')
const app = express()
const port = 5000

const connection = require('./conf');

app.get('/students', (request, response) => {
    connection.query('SELECT * FROM students',(err, results)=> {
        if (err) {
            response.status(500).send(`error when trying to get all students : ${err}`);
          } else {
            response.json(results);
          }
    })
})

app.get('/sessions', (request, response) => {
    connection.query('SELECT * FROM sessions',(err, results)=> {
        if (err) {
            response.status(500).send(`error when trying to get all sessions : ${err}`);
          } else {
            response.json(results);
          }
    })
})

app.get('/campuses', (request, response) => {

    connection.query('SELECT * FROM campuses',(err, results)=> {
        if (err) {
            response.status(500).send(`error when trying to get all campuses : ${err}`);
          } else {
            response.json(results);
          }
    })
})

const queryGetProjects = 
`
SELECT 
  projects.id AS id,
  projects.url,
  projects.description,
  projects.githubLink,
  projects.imgLink,
  sessions.session_name AS session,
  sessions.date AS session_date,
  campuses.campus_name AS campus,
  campuses.coordonates AS campus_coordonates,
  students.student_name,
  students.githubLink AS student_github,
  Students.linkedinLink AS student_linkedin
FROM projects
JOIN sessions ON sessions.id=projects.session_id
JOIN campuses ON campuses.id=sessions.campuses_id
JOIN projects_has_students ON projects.id=projects_has_students.projects_id
JOIN students ON projects_has_students.students_id=students.id
 `

app.get('/projects', (request, response) => {

    connection.query(queryGetProjects,(err, datas)=> {

        if (err) {
            response.status(500).send(`error when trying to get all projects : ${err}`);
          } else {
            let results = datas

            let students = []
            let projects = []
            let currentId
            datas.map(data => {

              students = [
                ...students, 
                {
                name : data.student_name,
                github : data.student_github,
                linkedin : data.student_linkedin,
                }
              ]

              if (currentId !== data.id) {
                currentId = data.id

                projects = [
                  ...projects, 
                  {
                    id: data.id,
                    url: data.url,
                    description: data.description,
                    githubLink: data.githubLink,
                    imgLink: data.imgLink,
                    session: {
                      name :  data.session,
                      date : data.session_date
                    },
                    campus:{
                      name : data.campus,
                      coordonates : data.campus_coordonates
                    },
                    students : students
                  }
                ]

                students = []
              }

            })

            response.json(projects);
          }
    })
 
})

app.listen(port, () => {
    console.log(`Server is up and listening on ${port} ...`)
})

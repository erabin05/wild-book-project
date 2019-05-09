const express = require('express')
const app = express()
const port = 5000

const connection = require('./conf');

const sortProjects = require('./organizeData/organizeProjects.js')

app.get('/students', (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
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
  projects.title,
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
    response.header("Access-Control-Allow-Origin", "*");
    connection.query(queryGetProjects,(err, datas)=> {

        if (err) {
            response.status(500).send(`error when trying to get all projects : ${err}`);
          } else {
            response.json(sortProjects(datas));
          }
    })
 
})

app.listen(port, () => {
    console.log(`Server is up and listening on ${port} ...`)
})

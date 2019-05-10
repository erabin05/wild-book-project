const express = require('express')
const app = express()
const port = 5000

const connection = require('./conf');

const sortProjects = require('./organizeData/organizeProjects.js')
const querysProject = require('./querys/projects.js')

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


// PROJECTS
const connectionGetProjects = (action, method, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  connection.query(method,(err, datas)=> {
    if (err) {
        res.status(500).send(`error when trying to ${action} : ${err}`);
      } else {
        res.json(sortProjects(datas));
      }
  })
}

// GET ALL PROJECTS
app.get('/projects', (request, response) => {
  connectionGetProjects('get all projects', querysProject.getAll, response)
})

// GET PROJECTS BY CAMPUSES
app.get('/projects/campus=:campus_id', (request, response) => {
  const campus_id = request.params.campus_id;
  connectionGetProjects(`get projects by campuse id(${campus_id})`, querysProject.getByCampus(campus_id), response)
})

// GET PROJECTS BY LANGUAGE
app.get('/projects/campus=:campus_id', (request, response) => {
  const campus_id = request.params.campus_id;
  connectionGetProjects(`get projects by campuse id(${campus_id})`, querysProject.getByCampus(campus_id), response)
})


// GET RESEARCH BY PROJECT TITLE
app.get('/projects/research=:project_title', (request, response) => {
  const project_title = request.params.project_title;
  connectionGetProjects(`get projects with research ='${campus_id}'`, querysProject.getByProjectResearch(project_title), response)
})


app.listen(port, () => {
    console.log(`Server is up and listening on ${port} ...`)
})

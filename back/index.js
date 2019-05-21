const express = require('express')
const app = express()
const port = 5000

const connection = require('./conf');


const querysProject = require('./querys/projects.js')
const sortProjects = require('./organizeData/organizeProjects.js')

const querysCampus = require('./querys/campuses.js')
const sortCampuses = require('./organizeData/organizeCampuses.js')

const querysStudents = require('./querys/students.js')
const sortStudents = require('./organizeData/organizeStudents.js')

const querysLanguages = require('./querys/languages.js')


const connectionGet = (action, method, param, res, categorie, sortForCategorie) => {
  res.header("Access-Control-Allow-Origin", "*");
  connection.query(method, [param],  (err, datas)=> {
    if (err) {
        res.status(500).send(`error when trying to ${action} : ${err}`);
      } else {
        res.json(sortForCategorie(datas, categorie));
      }
  })
}

// ------------------ PROJECTS -------------------------

// GET ALL PROJECTS
app.get('/projects', (request, response) => {
  connectionGet('get all projects', querysProject.getAll, response)
})

// GET PROJECTS BY CAMPUSES
app.get('/projects/campus=:campus_id', (request, response) => {
  const campus_id = request.params.campus_id;
  connectionGet(`get projects by campuse id(${campus_id})`, querysProject.getByCampus ,campus_id , response, 'campus', sortProjects)
})

// GET PROJECTS BY LANGUAGE
app.get('/projects/language=:language_id', (request, response) => {
  const language_id = request.params.language_id;
  connectionGet(`get projects by language id(${language_id})`, querysProject.getByLanguage, language_id, response, 'language', sortProjects)
})

// GET PROJECTS BY SESSION
app.get('/projects/session=:session_id', (request, response) => {
  const session_id = request.params.session_id;
  connectionGet(`get projects by session id(${session_id})`, querysProject.getBySession, session_id, response, 'session', sortProjects)
})

// GET RESEARCH BY PROJECT TITLE
app.get('/projects/search=:project_title', (request, response) => {
  const project_title = request.params.project_title;
  connectionGet(`get projects with research ='${project_title}'`,querysProject.getByProjectResearch, `${project_title}%`, response, 'search', sortProjects)
})

// ------------------ CAMPUSES -------------------------

// GET RESEARCH BY CAMPUS TITLE
app.get('/campuses/search=:project_title', (request, response) => {
  const project_title = request.params.project_title;
  connectionGet(`get campuses with research ='${project_title}'`,querysCampus.getByNameResearch, `${project_title}%`, response, 'search', sortCampuses)
})

// ------------------ STUDENTS -------------------------

// GET RESEARCH BY STUDENTS TITLE
app.get('/students/search=:project_title', (request, response) => {
  const project_title = request.params.project_title;
  connectionGet(`get campuses with research ='${project_title}'`,querysStudents.getByNameResearch, `${project_title}%`, response, 'search', sortStudents)
})

// ------------------ STUDENTS -------------------------

// GET RESEARCH BY STUDENTS TITLE
app.get('/languages/search=:project_title', (request, response) => {
  const project_title = request.params.project_title;
  connectionGet(`get campuses with research ='${project_title}'`,querysLanguages.getByNameResearch, `${project_title}%`, response, 'search', data=>data)
})


app.listen(port, () => {
    console.log(`Server is up and listening on ${port} ...`)
})

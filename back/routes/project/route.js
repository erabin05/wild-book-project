const express = require('express')
const router = express.Router()

const querysProject = require('./querys.js')
const sortProjects = require('./organizeProjects.js')

const connectionGet = require('../connectionGet')

router.use((req, res, next) => {
    next()
});
  
  // Get by campus
  router.get('/campus=:campus_id', (request, response) => {
    const campus_id = request.params.campus_id
    connectionGet(`get projects by campuse id(${campus_id})`, querysProject.getByCampus ,campus_id , response, 'campus', sortProjects)
  })
  
  // Get by language
  router.get('/language=:language_id', (request, response) => {
    const language_id = request.params.language_id
    connectionGet(`get projects by language id(${language_id})`, querysProject.getByLanguage, language_id, response, 'language', sortProjects)
  })
  
  // Get by session
  router.get('/session=:session_id', (request, response) => {
    const session_id = request.params.session_id
    connectionGet(`get projects by session id(${session_id})`, querysProject.getBySession, session_id, response, 'session', sortProjects)
  })

  // Get by period
  router.get('/period=:period_id', (request, response) => {
    const period_id = request.params.period_id
    connectionGet(`get projects by session id(${period_id})`, querysProject.getByPeriod, period_id, response, 'period', sortProjects)
  })
  
  // Get by title search
  router.get('/search=:project_title', (request, response) => {
    const project_title = request.params.project_title
    connectionGet(`get projects with research ='${project_title}'`,querysProject.getByProjectResearch, `${project_title}%`, response, 'search', sortProjects)
  })
  
  module.exports = router

const express = require('express')
const router = express.Router()
const connection = require('../../conf');

const sortSessions = require('./organizeSession.js')
const queries = require('./queries')

const connectionGet = require('../connectionGet')

router.use((req, res, next) => {
    next()
});

router.get('/campus=:name', (request, response)=> {
    const campusId = request.params.name
    connectionGet(
        `get sessions when campus_id='${campusId}'`,
        queries.getByCampusId, 
        `${campusId}%`, 
        response, 
        'session',
        sortSessions
    )
})

module.exports = router
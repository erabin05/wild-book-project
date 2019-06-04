const express = require('express')
const router = express.Router()
const connection = require('../../conf');

const connectionGet = require('../connectionGet')
const queries = require('./queries')

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
        data=>data
    )
})

module.exports = router
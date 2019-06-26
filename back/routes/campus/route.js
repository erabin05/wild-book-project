const express = require('express')
const router = express.Router()

const connectionGet = require('../connectionGet')
const querys = require('./querys.js')

router.use((req, res, next) => {
    next()
});

// Get by name search
router.get('/search=:campus_name', (request, response) => {
    const campus_name = request.params.campus_name;
    connectionGet(
        `get campuses with research ='${campus_name}'`,
        querys.getByNameResearch,
        `${campus_name}%`,
        response,
        'search', 
        data=>data)
})
  
// Get randomly
router.get('/random', (request, response) => {
    connectionGet(`get campuses randomly'`,querys.getRandomly, '', response, 'random', data=>data)
})

router.get('/near', (request, response) => {
    const { lat, long } = request.query
    connectionGet(`get campuses by distance'`,querys.getNearest(lat, long), '', response, 'random', data=>data)
})

module.exports = router

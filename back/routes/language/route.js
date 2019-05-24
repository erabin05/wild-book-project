const express = require('express')
const router = express.Router()

const querys = require('./querys.js')

const connectionGet = require('../connectionGet')

// Get by name search
router.get('/search=:language_name', (request, response) => {
    const language_name = request.params.language_name;
    connectionGet(`get campuses with research ='${language_name}'`,querys.getByNameResearch, `${language_name}%`, response, 'search', data=>data)
})
  
router.get('/random', (request, response) => {
    connectionGet(`get languages randomly'`,querys.getRandomly, '', response, 'random', data=>data)
})

module.exports = router

const express = require('express')
const router = express.Router()

const connectionGet = require('../connectionGet')
const querys = require('./querys.js')
const sortStudents = require('./organizeStudents.js')

router.use((req, res, next) => {
    next()
});

// Get by name search
router.get('/search=:student_name', (request, response) => {
    const student_name = request.params.student_name;
    connectionGet(
        `get students with search ='${student_name}'`,
        querys.getByNameResearch, 
        `${student_name}%`, 
        response, 
        'search', 
        sortStudents
    )
})

module.exports = router

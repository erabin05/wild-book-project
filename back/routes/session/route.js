const express = require('express')
const router = express.Router()
const connection = require('../../conf');

const { getByCampusName } = require('./queries')

router.use((req, res, next) => {
    next()
});

const organizeSession = datas => (
    datas.map(data => ({
        id : data.id,
        name : data.name,
        date : data.date,
        campus : {
            id : data.campus_id,
            name : data.campus_name
        }
    }))
)

router.get('/campus=:name', (request, response)=> {
    const campusName = request.params.name

    connection.query(getByCampusName, [campusName], (err, datas)=> {
        if (err) {
            response.status(500).send(`error when trying to get session for campus ${campusName} : ${err}`)
        } else {
            response.json(organizeSession(datas))
        }
    })

})

module.exports = router
const express = require('express')
const router = express.Router()
const connection = require('../../conf');

router.use((req, res, next) => {
    next()
});

// Create a period
router.post("/", (req, res) => {
    const { name, session_id } = req.body
    const query = 'INSERT INTO periods (name, session_id) VALUES (?,?)'

    connection.query(query, [name, session_id],  err => {

        if (err) {
            res.status(500).send(`error when trying to create period ${name} : ${err}`);
        } else {
            res.send(200);
        }

    })
});
  
module.exports = router
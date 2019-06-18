const express = require('express')
const router = express.Router()
const connection = require('../../conf');

const connectionDelete = require('../connectionDelete')
const connectionPost = require('../connectionPost')

router.use((req, res, next) => {
    next()
});

// Create a period
router.post("/", (req, res) => {
    const { name, session_id } = req.body
    const query = 'INSERT INTO periods (name, session_id) VALUES (?,?)'

    connectionPost(
        query,
        res,
        [name, session_id]
    )
});

// Delete a period
router.delete("/:period_id",(req,res) => {
    const period_id = req.params.period_id
    const query = 'DELETE FROM periods WHERE id=?'

    connectionDelete(
        query,
        res,
        period_id
    )
})
  
module.exports = router
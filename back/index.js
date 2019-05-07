const express = require('express')
const app = express()
const port = 5000

const connection = require('./conf');

app.get('/students', (request, response) => {
    connection.query('SELECT * FROM students',(err, results)=> {
        if (err) {
            response.status(500).send(`error when trying to get all students : ${err}`);
          } else {
            response.json(results);
          }
    })
})

app.get('/sessions', (request, response) => {
    connection.query('SELECT * FROM sessions',(err, results)=> {
        if (err) {
            response.status(500).send(`error when trying to get all sessions : ${err}`);
          } else {
            response.json(results);
          }
    })
})

app.get('/campuses', (request, response) => {
    connection.query('SELECT * FROM campuses',(err, results)=> {
        if (err) {
            response.status(500).send(`error when trying to get all campuses : ${err}`);
          } else {
            response.json(results);
          }
    })
})

app.listen(port, () => {
    console.log(`Server is up and listening on ${port} ...`)
})

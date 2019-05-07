import express from 'express'
import mysql from 'mysql'

const app = express()
const port = 5000

app.get('/students', (request, response) => {

})

app.listen(port, () => {
    console.log(`Server is up and listening on ${port} ...`)
})

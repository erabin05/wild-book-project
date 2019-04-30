import express from 'express'
import mysql from 'mysql'

const app = express()
const router = express.router()

app.get('/categories', (request, response) => {

}).listen(5000, () => {
    console.log('Server is up and listening on 5000 ...')
})

const express = require('express')
const app = express()
const port = 5000

const project = require('./routes/project/route')
const campus = require('./routes/campus/route')
const language = require('./routes/language/route')
const student = require('./routes/student/route')
const session = require('./routes/session/route')

app.use('/project', project)
app.use('/campus', campus)
app.use('/language', language)
app.use('/student', student)

// Session
app.use('/session', session)


app.listen(port, () => {
    console.log(`Server is up and listening on ${port} ...`)
})

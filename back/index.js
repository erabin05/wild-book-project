const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 5000

const passport = require('passport')

const project = require('./routes/project/route')
const campus = require('./routes/campus/route')
const language = require('./routes/language/route')
const student = require('./routes/student/route')
const session = require('./routes/session/route')
const period = require('./routes/period/route')
const login = require('./routes/login')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./passport-strategy')

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.use('/project', project)
app.use('/campus', campus)
app.use('/language', language)
app.use('/student', student)
app.use('/session', session)
app.use('/period', period)
app.use('/login', login)


app.listen(port, () => {
    console.log(`Server is up and listening on ${port} ...`)
})

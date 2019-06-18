const connection = require('../conf');

const connectionPost = (
  method,
  res,
  params
) => {
  connection.query(method, params,  err => {
    if (err) {
      res.status(500).send(`error when trying to create period : ${err}`)
    } else {
      res.sendStatus(200)
    }
  })
}

module.exports = connectionPost
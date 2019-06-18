const connection = require('../conf');

const connectionDelete = (
  method,
  res,
  id 
) => {
  connection.query(method, [id],  err => {
    if (err) {
    	res.status(500).send(`error when trying to delete period ${id} : ${err}`)
    } else {
      res.sendStatus(200)
    }
  })
}

module.exports = connectionDelete
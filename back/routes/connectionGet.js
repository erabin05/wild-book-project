
const connection = require('../conf');

const connectionGet = (
  action, 
  method, 
  param, 
  res, 
  categorie, 
  sortForCategorie
) => {
  res.header("Access-Control-Allow-Origin", "*");
  connection.query(method, [param],  (err, datas)=> {
    if (err) {
        res.status(500).send(`error when trying to ${action} : ${err}`);
      } else {
        res.json(sortForCategorie(datas, categorie));
      }
  })
}

module.exports = connectionGet

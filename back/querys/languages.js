const getAll = 
`
SELECT
id,
language_name AS name
FROM languages
`
const getByNameResearch = `${getAll} WHERE languages.language_name LIKE ?`

 module.exports = {
    getAll,
    getByNameResearch
 }

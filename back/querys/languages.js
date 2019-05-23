const getAll = 
`
SELECT
id,
language_name AS name
FROM languages
`
const getByNameResearch = `${getAll} WHERE languages.language_name LIKE ?`

const getRandomly = `${getAll} ORDER BY RAND() LIMIT 1;`

 module.exports = {
    getAll,
    getByNameResearch,
    getRandomly
 }

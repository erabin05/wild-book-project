const getAll = 
`
SELECT
campuses.id AS id,
campuses.campus_name AS name,
campuses.coordonates AS coordonates
FROM campuses
`
const getByNameResearch = `${getAll} WHERE campuses.campus_name LIKE ?`

const getRandomly = `${getAll} ORDER BY RAND() LIMIT 1;`

 module.exports = {
    getAll,
    getByNameResearch,
    getRandomly
 }

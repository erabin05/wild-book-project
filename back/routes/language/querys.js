const getAll = 
`
   SELECT
   languages.id AS id,
   languages.language_name AS name
   FROM languages
`
const getByNameResearch = `${getAll} WHERE languages.language_name LIKE ?`

const getRandomly = 
`
   ${getAll}
   JOIN sessions_has_languages ON languages.id=sessions_has_languages.languages_id
   JOIN sessions ON sessions.id=sessions_has_languages.sessions_id
   JOIN periods ON sessions.id=periods.session_id
   JOIN projects ON projects.period_id=periods.id
   WHERE projects.id IS NOT NULL
   ORDER BY RAND() 
   LIMIT 1;
`

 module.exports = {
    getAll,
    getByNameResearch,
    getRandomly
 }

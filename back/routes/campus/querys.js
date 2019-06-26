const connection = require('../../conf');

const getAll = 
`
   SELECT
   campuses.id AS id,
   campuses.campus_name AS name
   FROM campuses
`
const getByNameResearch = `${getAll} WHERE campuses.campus_name LIKE ?`

const getRandomly = 
`
   ${getAll}
   JOIN sessions ON sessions.campuses_id=campuses.id
   JOIN periods ON sessions.id=periods.session_id
   JOIN projects ON projects.period_id=periods.id
   WHERE projects.id IS NOT NULL
   ORDER BY RAND() 
   LIMIT 1;
`
const getNearest = (lat, long) => 
`
   SELECT DISTINCT
   (
      ATAN(
         SQRT(
            POW(COS(RADIANS(campuses.latitude)) * 
            SIN(RADIANS(campuses.longitude) - 
            RADIANS(${connection.escape(long)})), 2) +
            POW(COS(RADIANS(${connection.escape(lat)})) * 
            SIN(RADIANS(campuses.latitude)) - 
            SIN(RADIANS(${connection.escape(lat)})) * 
            cos(RADIANS(campuses.latitude)) * 
            cos(RADIANS(campuses.longitude) - 
            RADIANS(${connection.escape(long)})), 2)
         ),
         SIN(RADIANS(${connection.escape(lat)})) * 
         SIN(RADIANS(campuses.latitude)) + 
         COS(RADIANS(${connection.escape(lat)})) * 
         COS(RADIANS(campuses.latitude)) * 
         COS(RADIANS(campuses.longitude) - 
         RADIANS(${connection.escape(long)}))
      ) * 6371000
   ) AS distance,
   campuses.id AS id,
   campuses.campus_name AS name
   FROM campuses
   JOIN sessions ON sessions.campuses_id=campuses.id
   JOIN periods ON sessions.id=periods.session_id
   JOIN projects ON projects.period_id=periods.id
   WHERE projects.id IS NOT NULL
   ORDER BY distance DESC
`

 module.exports = {
    getAll,
    getByNameResearch,
    getRandomly,
    getNearest
 }

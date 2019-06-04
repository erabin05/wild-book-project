
const getByCampusName = 
`
    SELECT 
    sessions.id AS id, 
    sessions.session_name AS name, 
    sessions.date  AS date,
    campuses.id AS campus_id,
    campuses.campus_name AS campus_name
    FROM sessions 
    JOIN campuses ON sessions.campuses_id=campuses.id 
    WHERE campuses.campus_name=?;
`

module.exports = {
    getByCampusName
}
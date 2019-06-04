
const getByCampusId = 
`
    SELECT 
    sessions.id AS id, 
    sessions.session_name AS name, 
    sessions.date AS date
    FROM sessions 
    WHERE campuses_id=?;
`

module.exports = {
    getByCampusId
}
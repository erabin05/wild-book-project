
const getByCampusId = 
`
    SELECT 
    sessions.id AS id, 
    sessions.session_name AS name, 
    sessions.date AS date,
    periods.id AS period_id,
    periods.name AS period_name
    FROM sessions
    JOIN periods ON periods.session_id=sessions.id
    WHERE campuses_id=?;
`

module.exports = {
    getByCampusId
}
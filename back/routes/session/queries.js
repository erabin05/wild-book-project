
const getByCampusId = 
`
    SELECT 
    sessions.id AS id, 
    sessions.session_name AS name, 
    sessions.date AS date,
    periods.id AS period_id,
    periods.name AS period_name
    FROM sessions
    LEFT JOIN periods ON periods.session_id=sessions.id
    WHERE campuses_id=?
    ORDER BY date DESC;
`

module.exports = {
    getByCampusId
}
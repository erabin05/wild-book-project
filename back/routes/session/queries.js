
const getByCampusId = 
`
    SELECT 
    sessions.id AS id, 
    sessions.session_name AS name, 
    sessions.date AS date,
    periods.id AS period_id,
    periods.name AS period_name,
    languages.id AS language_id,
    languages.language_name AS language_name
    FROM sessions
    LEFT JOIN periods ON periods.session_id=sessions.id
    LEFT JOIN sessions_has_languages ON sessions_has_languages.sessions_id=sessions.id
    JOIN languages ON sessions_has_languages.languages_id=languages.id
    WHERE campuses_id=?
    ORDER BY date DESC;
`

module.exports = {
    getByCampusId
}
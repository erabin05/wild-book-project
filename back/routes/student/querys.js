const getAll = 
`
SELECT
students.id AS id,
students.student_name AS name,
students.githubLink AS github,
students.linkedinLink AS linkedin,
sessions.id AS session_id,
sessions.session_name AS session_name,
campuses.id AS campus_id,
campuses.campus_name AS campus_name
FROM students
JOIN sessions ON sessions.id=students.sessions_id
JOIN campuses ON campuses.id=sessions.campuses_id
`
const getByNameResearch = `${getAll} WHERE students.student_name LIKE ?`

 module.exports = {
    getAll,
    getByNameResearch
 }

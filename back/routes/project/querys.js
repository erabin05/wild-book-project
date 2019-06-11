const getAll = 
`
SELECT
  projects.id AS id,
  projects.url,
  projects.title,
  projects.description,
  projects.githubLink,
  projects.imgLink,
  sessions.id AS session_id,
  sessions.session_name AS session,
  sessions.date AS session_date,
  campuses.id AS campus_id,
  campuses.campus_name AS campus,
  campuses.latitude AS campus_latitude,
  campuses.longitude AS campus_longitude,
  languages.id AS language_id,
  languages.language_name AS language,
  students.id AS student_id,
  students.student_name,
  students.githubLink AS student_github,
  students.linkedinLink AS student_linkedin
FROM projects
JOIN periods ON periods.id=projects.period_id
JOIN sessions ON sessions.id=periods.session_id
JOIN sessions_has_languages ON sessions.id=sessions_has_languages.sessions_id
JOIN languages ON sessions_has_languages.languages_id=languages.id
JOIN campuses ON campuses.id=sessions.campuses_id
JOIN projects_has_students ON projects.id=projects_has_students.projects_id
JOIN students ON projects_has_students.students_id=students.id
 `

const getByCampus = `${getAll} WHERE campuses.id = ?`
const getBySession = `${getAll} WHERE sessions.id = ?`
const getByLanguage = `${getAll} WHERE languages.id = ?`
const getByPeriod = `${getAll} WHERE periods.id = ?`

const getByProjectResearch = `${getAll} WHERE projects.title LIKE ?`

 module.exports = {
    getAll,
    getByCampus,
    getBySession,
    getByLanguage,
    getByPeriod,
    getByProjectResearch
 }

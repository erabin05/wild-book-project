const sortStudents = (datas) => (
    datas.map(data => ({
        id : data.id,
        name : data.name,
        github : data.github,
        linkedin : data.linkedin,
        session : {
            id : data.session_id,
            name : data.session_name
        },
        campus : {
            id : data.campus_id,
            name : data.campus_name
        }
    }))
)

module.exports = sortStudents

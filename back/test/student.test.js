const { expect } = require('chai')
const sortStudents = require('../routes/student/organizeStudents')

describe('Students', () => {
    it('Should return an array of objects students organised', () => {
        const students = [{
            id: 3,
            name: "Clement Bechetoille",
            github: "https://github.com/",
            linkedin: "https://www.linkedin.com",
            session_id: 1,
            session_name: "Février 2018",
            campus_id: 1,
            campus_name: "Reims"
        }]

        const expected = [{
                id: 3,
                name: "Clement Bechetoille",
                github: "https://github.com/",
                linkedin: "https://www.linkedin.com",
                session: {
                    id: 1,
                    name: "Février 2018"
                },
                campus: {
                    id: 1,
                    name: "Reims"
                }
            }]
        expect(sortStudents(students)).to.deep.equal(expected)
    })
})

const sortProjects = datas => {
    
// List all students with project id
let listOfstudents = datas.map(data => 
    ({
      project_id : data.id,
      student : 
      {
        name : data.student_name,
        github : data.student_github,
        linkedin : data.student_linkedin,
      }
    })
  )

  // List of project without double and students
  let currentId
  let projects = []
  
  datas.map(data => {

    if (currentId !== data.id) {
      currentId = data.id
      // Students for this project
      let students = listOfstudents.filter(student => student.project_id === data.id)
      // Object Project
      projects = [
        ...projects,
        {
          id: data.id,
          url: data.url,
          description: data.description,
          githubLink: data.githubLink,
          imgLink: data.imgLink,
          session: {
            name :  data.session,
            date : data.session_date
          },
          campus:{
            name : data.campus,
            coordonates : data.campus_coordonates
          },
          students : students.map(student => student.student)
        }
      ] 
    }

  })

  return projects
}

module.exports = sortProjects

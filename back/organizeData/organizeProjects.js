const sortProjects = (datas, researchCategorie) => {  
    
// List all students with project id
let listOfstudents = datas.map(data => 
    ({
      project_id : data.id,
      student : 
      {
        id : data.student_id,
        name : data.student_name,
        github : data.student_github,
        linkedin : data.student_linkedin,
      }
    })
  )

  // List of project without double and students
  let currentId
  let projects = []
  let categorie
  
  datas.map(data => {

  // Categorie of project list
  switch (researchCategorie) {
    case 'campus' :
      categorie = {
        type : 'campus',
        name : data.campus,
        id : data.campus_id
      } 
      break
    case 'language':
      categorie = {
        type : 'language',
        name : data.language,
        id : data.language_id
      } 
      break
    case 'session':
      categorie = {
        type : 'session',
        name : data.session,
        id : data.session_id
      } 
      break
    default:
      categorie = 'undefined'
  }

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
          title: data.title,
          description: data.description,
          githubLink: data.githubLink,
          imgLink: data.imgLink,
          session: {
            id : data.session_id,
            name :  data.session,
            date : data.session_date
          },
          campus:{
            id : data.campus_id,
            name : data.campus,
            coordonates : data.campus_coordonates
          },
          language:{
            id : data.language_id,
            name : data.language
          },
          students : students.map(student => student.student)
        }
      ] 
    }

  })


  return { categorie, projects }
}

module.exports = sortProjects

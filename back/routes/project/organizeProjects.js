const removeDouble = (arr, comp) => {
  const unique = arr
    .map(e => e[comp])
     // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)
    // eliminate the dead keys & store unique objects
    .filter(e => arr[e]).map(e => arr[e]);
   return unique;
}

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

  let listOfLanguages = datas.map(data => 
    ({
      project_id : data.id,
      language : 
      {
        id : data.language_id,
        name : data.language,
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
      students = removeDouble(students.map(student => student.student), 'id')
      // languages for this project
      let languages = listOfLanguages.filter(language => language.project_id === data.id)
      languages = removeDouble(languages.map(language => language.language), 'id')

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
            latitude : data.campus_latitude,
            longitude : data.campus_longitude
          },
          languages,
          students
        }
      ] 
    }

  })


  return { categorie, projects: removeDouble(projects, 'id') }
}

module.exports = sortProjects

import React from 'react'

export const numberOfprojectByRow = screenSize => {
    switch (screenSize) {
        case 'desktop': 
            return 4
        case 'tablet': 
            return 3
        case 'phone': 
            return 2
    }
}

export const numberOfProjectByScreenSize = (projects, screenSize) => {
    switch (screenSize) {
        case 'desktop': 
            return projects
        case 'tablet': 
            return [projects[0], projects[1] , projects[2]]
        case 'phone': 
            return [projects[0], projects[1] , projects[2], projects[3]]
    }
}

export const projectsInRowOfNumber = (projects, number) => {
    let projectsInRows = []
    let projectByfour = []

    projects.map((project, id) => {
        projectByfour = [...projectByfour, project]
        if ((id+1)%number === 0 || (id+1)%number !== 0 && (id+1) === projects.length) {
            projectsInRows = [...projectsInRows, projectByfour]
            projectByfour = []
        } 
    })
    return projectsInRows
}

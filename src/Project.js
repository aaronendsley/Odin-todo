export function createProject(name, dueDate) {
    const projectID = crypto.randomUUID();
    return {
        projectId: projectID,
        projectName: name,
        dueDate: dueDate,
        todos: []
    }
}

export function deleteProject(projectId, Store) {

}

export function editProject(projectId, Store) {

}

export function selectProject(projectId, Store) {

}
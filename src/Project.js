export function CreateProject(name, dueDate) {
    const projectID = crypto.randomUUID();
    return {
        projectId: projectID,
        projectName: name,
        dueDate: dueDate,
        todos: []
    }
}
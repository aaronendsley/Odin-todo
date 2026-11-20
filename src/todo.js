export function createTodo(todoObj) {
    const todo = {
        id: crypto.randomUUID(),
        title: todoObj.title,
        description: todoObj.description,
        dueDate: todoObj.dueDate,
        priority: todoObj.priority,
        notes: todoObj.notes,
        completed: false
    }

    return todo;
}
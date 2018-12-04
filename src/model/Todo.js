
class Todo {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    static copy(todo) {
        return new Todo(todo.title, todo.description);
    }

    equals(todo) {
        return this.title === todo.title &&
            this.description === todo.description;
    }
}

export default Todo;
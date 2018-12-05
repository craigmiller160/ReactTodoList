import * as actions from './actionTypes';

export const addTodo = todo => {
    return {
        type: actions.ADD_TODO,
        todo
    }
};

export const removeTodoList = index => {
    return {
        type: actions.REMOVE_TODO_LIST,
        index
    }
};

export const updateTodoList = (todo, index) => {
    return {
        type: actions.UPDATE_TODO_LIST,
        todo,
        index
    }
};
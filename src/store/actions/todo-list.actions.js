import * as actions from './actionTypes';

export const addTodo = todo => {
    return {
        type: actions.ADD_TODO,
        todo
    }
};

export const removeTodo = todo => {
    return {
        type: actions.REMOVE_TODO,
        todo
    }
};

export const updateTodoList = (todo, index) => {
    return {
        type: actions.UPDATE_TODO_LIST,
        todo,
        index
    }
};
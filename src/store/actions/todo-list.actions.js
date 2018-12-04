import * as actions from './actionTypes';

export const addTodo = todo => {
    return {
        type: actions.ADD_TODO,
        value: todo
    }
};

export const removeTodo = todo => {
    return {
        type: actions.REMOVE_TODO,
        value: todo
    }
};
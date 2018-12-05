import * as actions from './actionTypes';

export const selectTodo = (todo, index) => {
    return {
        type: actions.SELECT_TODO,
        todo,
        index
    }
};

export const updateTodoDetails = todo => {
    return {
        type: actions.UPDATE_TODO_DETAILS,
        todo
    }
};

export const removeTodoDetails = () => {
    return {
        type: actions.REMOVE_TODO_DETAILS
    }
};
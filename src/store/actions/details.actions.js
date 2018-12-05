import * as actions from './actionTypes';

export const selectTodo = (todo, index) => {
    return {
        type: actions.SELECT_TODO,
        value: {
            todo,
            index
        }
    }
};

export const updateTodoDetails = todo => {
    return {
        type: actions.UPDATE_TODO_DETAILS,
        value: {
            todo
        }
    }
};
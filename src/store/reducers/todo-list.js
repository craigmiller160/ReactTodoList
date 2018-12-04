import * as actions from '../actions/actionTypes';

const initialState = {
    todos: []
};

const reducer = (state = initialState, action) => {
    const todos = state.todos.slice();
    switch (action.type) {
        case actions.ADD_TODO:
            todos.push(action.value);

            return {
                ...state,
                todos
            };
        case actions.REMOVE_TODO:
            const index = todos.findIndex(todo => todo.equals(action.value));
            if (index > -1) {
                todos.splice(index, 1);
            }

            return {
                ...state,
                todos
            };
        default:
            return state;
    }
};

export default reducer;
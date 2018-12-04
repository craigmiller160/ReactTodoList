import * as actions from '../actions/actionTypes';

const initialState = {
    todos: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_TODO:
            const todos = state.todos.slice();

            return {
                ...state
            };
        case actions.REMOVE_TODO:
            return {
                ...state
            };
        default:
            return state;
    }
};

export default reducer;
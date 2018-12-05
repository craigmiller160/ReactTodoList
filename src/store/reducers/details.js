import * as actions from '../actions/actionTypes';

const initialState = {
    selected: null,
    index: -1
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SELECT_TODO:
            return {
                ...state,
                selected: action.todo,
                index: action.index
            };
        case actions.UPDATE_TODO_DETAILS:
            return {
                ...state,
                selected: action.todo
            };
        default:
            return state;
    }
};

export default reducer;
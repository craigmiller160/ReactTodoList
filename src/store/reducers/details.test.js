import detailsReducer from './details';
import * as actions from '../actions/actionTypes';
import Todo from '../../model/Todo';

describe('detailsReducer', () => {
    const todo = new Todo('TestTodo', 'This is a test Todo');

    it('should select Todo', () => {
        const initialState = {
            selected: null,
            index: -1
        };

        const action = {
            type: actions.SELECT_TODO,
            todo,
            index: 1
        };

        const expectedState = {
            selected: todo,
            index: 1
        };

        expect(detailsReducer(initialState, action)).toEqual(expectedState);
    });

    it('should update Todo', () => {
        const initialState = {
            selected: todo,
            index: 1
        };

        const newTodo = Todo.copy(todo);
        newTodo.title = 'New Title';
        newTodo.description = 'New Description';

        const action = {
            type: actions.UPDATE_TODO_DETAILS,
            todo: newTodo
        };

        const expectedState = {
            selected: newTodo,
            index: 1
        };

        expect(detailsReducer(initialState, action)).toEqual(expectedState);
    });

    it('should remove Todo', () => {
        const initialState = {
            selected: todo,
            index: 1
        };

        const action = {
            type: actions.REMOVE_TODO_DETAILS
        };

        const expectedState = {
            selected: null,
            index: -1
        };

        expect(detailsReducer(initialState, action)).toEqual(expectedState);
    });
});
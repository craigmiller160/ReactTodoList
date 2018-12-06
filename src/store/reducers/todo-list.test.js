import * as actions from '../actions/actionTypes';
import todoListReducer from './todo-list';
import Todo from '../../model/Todo';

describe('todoListReducer', () => {
    const todo = new Todo('TestTodo', 'This is a test Todo');

    it('should add Todo', () => {
        const initialState = {
            todos: []
        };

        const action = {
            type: actions.ADD_TODO,
            todo
        };

        const expectedState = {
            todos: [todo]
        };

        expect(todoListReducer(initialState, action)).toEqual(expectedState);
    });

    it('should remove Todo', () => {
        const initialState = {
            todos: [todo]
        };

        const action = {
            type: actions.REMOVE_TODO_LIST,
            index: 0
        };

        const expectedState = {
            todos: []
        };

        expect(todoListReducer(initialState, action)).toEqual(expectedState);
    });

    it('should update Todo', () => {
        const initialState = {
            todos: [todo]
        };

        const newTodo = Todo.copy(todo);
        newTodo.title = 'New Title';
        newTodo.description = 'New Description';

        const action = {
            type: actions.UPDATE_TODO_LIST,
            todo: newTodo,
            index: 0
        };

        const expectedState = {
            todos: [newTodo]
        };

        expect(todoListReducer(initialState, action)).toEqual(expectedState);
    });
});
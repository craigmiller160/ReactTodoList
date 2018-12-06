import * as actions from './actionTypes';
import Todo from '../../model/Todo';
import * as todoListActions from './todo-list.actions';

describe('todoListActions', () => {
    const todo = new Todo('TestTodo', 'This is a test Todo');

    it('should add a Todo', () => {
        const expectedAction = {
            type: actions.ADD_TODO,
            todo
        };

        expect(todoListActions.addTodo(todo)).toEqual(expectedAction);
    });

    it('should remove a Todo', () => {
        const index = 1;
        const expectedAction = {
            type: actions.REMOVE_TODO_LIST,
            index
        };

        expect(todoListActions.removeTodoList(index)).toEqual(expectedAction);
    });

    it('should update a Todo', () => {
        const index = 1;
        const expectedAction = {
            type: actions.UPDATE_TODO_LIST,
            todo,
            index
        };

        expect(todoListActions.updateTodoList(todo, index)).toEqual(expectedAction);
    });
});
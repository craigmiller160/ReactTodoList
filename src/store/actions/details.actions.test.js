import * as actions from './actionTypes';
import * as detailsActions from './details.actions';
import Todo from '../../model/Todo';

describe('detailsActions', () => {
    const todo = new Todo('TestTodo', 'This is a test Todo');

    it('should create an action to select a Todo', () => {
        const index = 1;
        const expectedAction = {
            type: actions.SELECT_TODO,
            todo,
            index
        };

        expect(detailsActions.selectTodo(todo, index)).toEqual(expectedAction);
    });

    it('should create an action to update Todo details', () => {
        const expectedAction = {
            type: actions.UPDATE_TODO_DETAILS,
            todo
        };

        expect(detailsActions.updateTodoDetails(todo)).toEqual(expectedAction);
    });

    it('should create an action to remove Todo details', () => {
        const expectedAction = {
            type: actions.REMOVE_TODO_DETAILS
        };

        expect(detailsActions.removeTodoDetails()).toEqual(expectedAction);
    });
});
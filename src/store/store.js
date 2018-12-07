import todoListReducer from './reducers/todo-list';
import detailsReducer from './reducers/details';
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
    todoList: todoListReducer,
    details: detailsReducer
});

const store = createStore(rootReducer);

export default store;
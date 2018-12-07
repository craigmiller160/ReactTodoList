import todoListReducer from './store/reducers/todo-list';
import detailsReducer from './store/reducers/details';
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
    todoList: todoListReducer,
    details: detailsReducer
});

const store = createStore(rootReducer);

export default store;
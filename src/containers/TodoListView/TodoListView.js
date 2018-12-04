import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../../components/TodoList/TodoList';
import ButtonPanel from '../../components/shared/ButtonPanel/ButtonPanel';
import * as todoListActions from '../../store/actions/todo-list.actions';

class TodoListView extends Component {

    render() {
        return (
            <div>
                <TodoList />
                <ButtonPanel />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        todos: state.todoList.todos
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddTodo: todo => dispatch(todoListActions.addTodo(todo))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListView);
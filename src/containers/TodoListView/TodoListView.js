import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../../components/TodoList/TodoList';
import ButtonPanel from '../../components/shared/ButtonPanel/ButtonPanel';
import * as todoListActions from '../../store/actions/todo-list.actions';
import classes from './TodoListView.css';
import Button from '../../components/shared/Button/Button';
import Todo from '../../model/Todo';

class TodoListView extends Component {

    render() {
        return (
            <div className={classes.TodoListView}>
                <div className={classes.title}>
                    <h2>Todos</h2>
                </div>
                <ButtonPanel>
                    <Button label="Add Todo" click={this.onAddTodo} />
                </ButtonPanel>
                <TodoList todos={this.props.todos} />
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
        onAddTodo: todo => dispatch(todoListActions.addTodo(new Todo('New Todo', 'A new Todo')))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListView);
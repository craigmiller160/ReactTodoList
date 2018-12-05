import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../../components/TodoList/TodoList';
import TitleButtonPanel from '../../components/shared/TitleButtonPanel/TitleButtonPanel';
import * as todoListActions from '../../store/actions/todo-list.actions';
import classes from './TodoListView.css';
import Button from '../../components/shared/Button/Button';
import Todo from '../../model/Todo';

class TodoListView extends Component {

    render() {
        return (
            <div className={classes.TodoListView}>
                <TitleButtonPanel title="Todos">
                    <Button label="Add Todo" click={this.onAddTodo} />
                </TitleButtonPanel>
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
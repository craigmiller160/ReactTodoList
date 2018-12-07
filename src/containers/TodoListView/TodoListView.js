import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../../components/Layout/TodoList/TodoList';
import TitleButtonPanel from '../../components/shared/TitleButtonPanel/TitleButtonPanel';
import * as todoListActions from '../../store/actions/todo-list.actions';
import * as detailsActions from '../../store/actions/details.actions';
import classes from './TodoListView.css';
import Button from '../../components/shared/Button/Button';
import Todo from '../../model/Todo';

class TodoListView extends Component {

    render() {
        return (
            <div className={classes.TodoListView}>
                <TitleButtonPanel title="Todos">
                    <Button label="Add Todo" click={this.props.onAddTodo} />
                </TitleButtonPanel>
                <TodoList todos={this.props.todos} selectTodo={this.props.onSelectTodo} />
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
        onAddTodo: () => dispatch(todoListActions.addTodo(new Todo('New Todo', 'A new Todo'))),
        onSelectTodo: (todo, index) => dispatch(detailsActions.selectTodo(todo, index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListView);
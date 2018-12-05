import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem/TodoItem';
import classes from './TodoList.css';

const TodoList = props => {
    const todos = props.todos.map(todo => (
        <TodoItem title={todo.title}/>
    ));

    return (
        <div className={classes.TodoList}>
            {todos}
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};

export default TodoList;
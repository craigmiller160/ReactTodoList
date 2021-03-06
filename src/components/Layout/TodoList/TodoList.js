import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem/TodoItem';
import classes from './TodoList.css';

const TodoList = props => {
    return (
        <div className={classes.TodoList}>
            {props.todos.map((todo, index) => (
                <TodoItem title={todo.title}
                          key={index}
                          select={() => props.selectTodo(todo, index)} />
            ))}
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    selectTodo: PropTypes.func.isRequired
};

export default TodoList;
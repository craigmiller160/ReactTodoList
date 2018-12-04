import React from 'react';
import PropTypes from 'prop-types';

const TodoList = props => {
    const todos = props.todos.map(todo => (
        <p>{todo.title}</p>
    ));

    return (
        <div>
            {todos}
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};

export default TodoList;
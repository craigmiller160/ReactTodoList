import React from 'react';
import PropTypes from 'prop-types';
import classes from './TodoItem.css';

const TodoItem = props => {
    return (
        <div className={classes.TodoItem}>
            <p>{props.title}</p>
        </div>
    );
};

TodoItem.propTypes = {
    title: PropTypes.string.isRequired
};

export default TodoItem;
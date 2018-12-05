import React from 'react';
import PropTypes from 'prop-types';
import classes from './TodoItem.css';

const TodoItem = props => {
    return (
        <div className={classes.TodoItem} onClick={props.select}>
            <p>{props.title}</p>
        </div>
    );
};

TodoItem.propTypes = {
    title: PropTypes.string.isRequired,
    select: PropTypes.func.isRequired
};

export default TodoItem;
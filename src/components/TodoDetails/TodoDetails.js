import React from 'react';
import classes from './TodoDetails.css';
import Input from '../shared/Input/Input';

const TodoDetails = props => {
    return (
        <div className={classes.TodoDetails}>
            <Input label="Title" />
            <Input label="Description" type="textarea" />
        </div>
    );
};

export default TodoDetails;
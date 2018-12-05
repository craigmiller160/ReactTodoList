import React from 'react';
import PropTypes from 'prop-types';
import classes from './TodoDetails.css';
import Input from '../shared/Input/Input';

const TodoDetails = props => {
    const title = props.selected ? props.selected.title : '';
    const description = props.selected ? props.selected.description : '';

    return (
        <div className={classes.TodoDetails}>
            <Input label="Title"
                   value={title} />
            <Input label="Description"
                   type="textarea"
                   value={description} />
        </div>
    );
};

TodoDetails.propTypes = {
    selected: PropTypes.object
};

export default TodoDetails;
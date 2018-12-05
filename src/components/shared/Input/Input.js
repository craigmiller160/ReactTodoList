import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.css';
import _ from 'lodash';

const Input = props => {
    const type = props.type ? props.type : 'text';
    const id = _.uniqueId('input_');

    let input;
    if (type === 'textarea') {
        input = <textarea id={id}
                          onChange={props.change}
                          rows="5"/>
    }
    else {
        input = <input id={id}
                       type={type}
                       onChange={props.change} />;
    }

    return (
        <div className={classes.Input}>
            <label htmlFor={id}>
                {props.label}
            </label>
            {input}
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    change: PropTypes.func
};

export default Input;
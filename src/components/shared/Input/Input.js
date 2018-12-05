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
                          disabled={props.disabled}
                          rows="10"
                          value={props.value}/>
    }
    else {
        input = <input id={id}
                       type={type}
                       onChange={props.change}
                       disabled={props.disabled}
                       value={props.value} />
    }

    const inputClasses = [classes.Input, 'row'].join(' ');
    const colClasses = [classes.grow, 'col'].join(' ');

    return (
        <div className={inputClasses}>
            <div className={colClasses}>
                <label htmlFor={id}>
                    {props.label}
                </label>
            </div>
            <div className={colClasses}>
                {input}
            </div>
        </div>
    );
};

Input.defaultProps = {
    disabled: false
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    change: PropTypes.func,
    disabled: PropTypes.bool.isRequired,
    value: PropTypes.string
};

export default Input;
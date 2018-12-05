import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.css';

const Button = props => {
    const style = {
        backgroundColor: props.backgroundColor,
        color: props.color,
        borderColor: props.borderColor
    };

    return (
        <button className={classes.Button}
                style={style}
                type="button"
                onClick={props.click}>
            {props.label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    click: PropTypes.func,
    borderColor: PropTypes.string
};

export default Button;
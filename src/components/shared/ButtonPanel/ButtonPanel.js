import React from 'react';
import classes from './ButtonPanel.css';

const ButtonPanel = props => {
    return (
        <div className={classes.ButtonPanel}>
            {props.children}
        </div>
    );
};

export default ButtonPanel;
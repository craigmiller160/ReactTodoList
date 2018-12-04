import React from 'react';
import classes from './Title.css';

const Title = props => {
    // const titleClasses = [classes.Title, 'col'].join(' ');

    return (
        <div className={classes.Title}>
            <h1>Todo List App</h1>
        </div>
    );
};

export default Title;
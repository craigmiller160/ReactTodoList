import React from 'react';
import PropTypes from 'prop-types';
import classes from './TitleButtonPanel.css';

const TitleButtonPanel = props => {
    const panelClasses = [classes.TitleButtonPanel, 'row'].join(' ');
    const colClasses = [classes.center, 'col'].join(' ');

    return (
        <div className={panelClasses}>
            <div className={colClasses}>
                <h2 className={classes.title}>{props.title}</h2>
            </div>
            <div className={colClasses}>
                {props.children}
            </div>
        </div>
    );
};

TitleButtonPanel.propTypes = {
    title: PropTypes.string.isRequired
};

export default TitleButtonPanel;
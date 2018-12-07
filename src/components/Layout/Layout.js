import React from 'react';
import classes from './Layout.css';
import Title from '../Title/Title';
import TodoListView from '../../containers/TodoListView/TodoListView';
import DetailsView from '../../containers/DetailsView/DetailsView';

const Layout = () => {
    return (
        <div className={classes.Layout}>
            <div className="row">
                <div className="col">
                    <Title />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <TodoListView />
                </div>
                <div className="col">
                    <DetailsView />
                </div>
            </div>
        </div>
    );
};

export default Layout;
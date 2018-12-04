import React, { Component } from 'react';
import classes from './App.css';
import Title from './components/Title/Title';
import TodoListView from './containers/TodoListView/TodoListView';
import DetailsView from './containers/DetailsView/DetailsView';

class App extends Component {
    render() {
        return (
            <div className={classes.App}>
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
    }
}

export default App;
